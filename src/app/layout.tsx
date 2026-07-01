// src/app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Providers from "@/components/Providers";
import { SITE_URL } from "@/lib/constants";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BMI, BMR & Body Fat Calculators | Living Healthier",
    template: "%s | Living Healthier",
  },
  description:
    "Free, accurate BMI, BMR, calorie needs (TDEE), and body fat percentage calculators. No signup required.",
  verification: {
    google: "VV5HmV0fXzBuQiC3pbk9zL_kr5nVVlNMZMofedx9B7E",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="pinterest-rich-pin" content="true" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9SG2104XWE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9SG2104XWE');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7604548979736038"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${mono.variable} ${sans.variable} font-sans antialiased`}>
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
