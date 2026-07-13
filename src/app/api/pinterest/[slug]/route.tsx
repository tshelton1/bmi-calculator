import { ImageResponse } from "next/og";
import { getBlogPost } from "@/lib/blog-posts";

export const runtime = "nodejs";

const WIDTH = 1000;
const HEIGHT = 1500;

const CREAM = "#F5F0E8";
const GOLD = "#C9A96E";
const DARK = "#0F1F18";
const WHITE = "#FFFFFF";
const MUTED_GOLD = "#A89060";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

async function loadGoogleFont(
  family: string,
  weight: number,
  style: "normal" | "italic" = "normal",
): Promise<ArrayBuffer> {
  const ital = style === "italic" ? "1" : "0";
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:ital,wght@${ital},${weight}&display=swap`;

  const css = await fetch(cssUrl, {
    headers: {
      // Old Safari UA returns truetype/opentype URLs (Satori cannot use woff2).
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((res) => res.text());

  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(opentype|truetype|woff)'\)/);
  if (!match?.[1]) {
    throw new Error(`Could not resolve font file for ${family} ${weight} ${style}`);
  }

  const fontRes = await fetch(match[1]);
  if (!fontRes.ok) {
    throw new Error(`Failed to download font ${family}: ${fontRes.status}`);
  }
  return fontRes.arrayBuffer();
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const post = getBlogPost(slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const facts = post.pinterestFacts?.slice(0, 4) ?? [];
  if (facts.length < 4) {
    return new Response("Infographic facts missing for this post", { status: 500 });
  }

  const calcPath = post.relatedCalculators[0]?.href ?? "/bmi-calculator";
  const calcUrl = `livinghealthier.net${calcPath}`;

  const [playfair700, inter400, inter600, inter400Italic] = await Promise.all([
    loadGoogleFont("Playfair Display", 700),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 600),
    loadGoogleFont("Inter", 400, "italic"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          backgroundColor: WHITE,
          fontFamily: "Inter",
        }}
      >
        {/* ZONE 1 — brand bar */}
        <div
          style={{
            height: 180,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: CREAM,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: DARK,
            }}
          >
            LIVINGHEALTHIER.NET
          </div>
          <div
            style={{
              marginTop: 18,
              width: 72,
              height: 2,
              backgroundColor: GOLD,
              display: "flex",
            }}
          />
        </div>

        {/* ZONE 2 — title */}
        <div
          style={{
            height: 320,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: DARK,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 20,
            }}
          >
            {post.topicLabel}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Playfair Display",
              fontSize: 46,
              fontWeight: 700,
              lineHeight: 1.15,
              color: WHITE,
              maxHeight: 160,
              overflow: "hidden",
            }}
          >
            {post.title}
          </div>
        </div>

        {/* ZONE 3 — physician byline */}
        <div
          style={{
            height: 100,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: CREAM,
            gap: 14,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect x="11" y="4" width="6" height="20" fill={GOLD} />
            <rect x="4" y="11" width="20" height="6" fill={GOLD} />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontStyle: "italic",
              fontFamily: "Inter",
              color: MUTED_GOLD,
            }}
          >
            By Dr. Tiffani, DO — Board-Certified Physician
          </div>
        </div>

        {/* ZONE 4 — facts */}
        <div
          style={{
            height: 680,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: WHITE,
            paddingLeft: 80,
            paddingRight: 80,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          {facts.map((fact, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isLast = index === facts.length - 1;
            return (
              <div
                key={num}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 18,
                  paddingBottom: 18,
                  borderBottom: isLast ? "none" : `1px solid ${CREAM}`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                  <div
                    style={{
                      display: "flex",
                      width: 72,
                      fontSize: 28,
                      fontWeight: 600,
                      color: GOLD,
                      fontFamily: "Inter",
                      lineHeight: 1.2,
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 28,
                        fontWeight: 600,
                        color: DARK,
                        lineHeight: 1.25,
                        marginBottom: 8,
                      }}
                    >
                      {fact.headline}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: 28,
                        fontWeight: 400,
                        color: "#2C3E35",
                        lineHeight: 1.35,
                      }}
                    >
                      {fact.detail}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ZONE 5 — CTA */}
        <div
          style={{
            height: 220,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: DARK,
            paddingLeft: 80,
            paddingRight: 80,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: GOLD,
              marginBottom: 14,
            }}
          >
            USE THE FREE CALCULATOR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: WHITE,
              marginBottom: 16,
            }}
          >
            {calcUrl}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontStyle: "italic",
              color: WHITE,
              opacity: 0.9,
            }}
          >
            Save this for later ↓
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
      fonts: [
        { name: "Playfair Display", data: playfair700, weight: 700, style: "normal" },
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter600, weight: 600, style: "normal" },
        { name: "Inter", data: inter400Italic, weight: 400, style: "italic" },
      ],
    },
  );
}
