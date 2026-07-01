import type { Metadata } from "next";

/**
 * Per-calculator Open Graph images for social sharing (Pinterest, Facebook, X).
 *
 * TODO: Supply dedicated 1200×630 JPG or PNG assets at the paths below, then
 * uncomment each entry's `path` to enable openGraph.images on that page.
 * Recommended location: public/images/og/<slug>.jpg
 */
export const CALCULATOR_OG_IMAGES: Record<
  string,
  { path?: string; alt: string }
> = {
  "bmi-calculator": {
    // path: "/images/og/bmi-calculator.jpg",
    alt: "BMI Calculator — Living Healthier",
  },
  "bmr-calculator": {
    // path: "/images/og/bmr-calculator.jpg",
    alt: "BMR Calculator — Living Healthier",
  },
  "calorie-calculator": {
    // path: "/images/og/calorie-calculator.jpg",
    alt: "Calorie Needs Calculator — Living Healthier",
  },
  "body-fat-calculator": {
    // path: "/images/og/body-fat-calculator.jpg",
    alt: "Body Fat Calculator — Living Healthier",
  },
  "macro-calculator": {
    // path: "/images/og/macro-calculator.jpg",
    alt: "Macro Calculator — Living Healthier",
  },
};

type CalculatorOgSlug = keyof typeof CALCULATOR_OG_IMAGES;

export function calculatorOpenGraph(
  slug: CalculatorOgSlug,
  title: string,
  description: string,
  url: string
): NonNullable<Metadata["openGraph"]> {
  const image = CALCULATOR_OG_IMAGES[slug];

  return {
    title,
    description,
    url,
    type: "website",
    siteName: "Living Healthier",
    // openGraph.images: enabled once `path` is set in CALCULATOR_OG_IMAGES above.
    ...(image.path
      ? {
          images: [
            {
              url: image.path,
              width: 1200,
              height: 630,
              alt: image.alt,
            },
          ],
        }
      : {}),
  };
}

export function calculatorTwitter(
  slug: CalculatorOgSlug,
  title: string,
  description: string
): NonNullable<Metadata["twitter"]> {
  const image = CALCULATOR_OG_IMAGES[slug];

  return {
    card: image.path ? "summary_large_image" : "summary",
    title,
    description,
    ...(image.path ? { images: [image.path] } : {}),
  };
}
