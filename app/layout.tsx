import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { business } from "@/lib/data";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { pageMetadata } from "@/lib/seo";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  other: {
    "color-scheme": "light dark",
  },
  ...pageMetadata({
    title: `${business.name} | Landscaping & Snow Removal, Merrimack Valley`,
    description:
      "Landscaping, lawn maintenance, mulch, hedge trimming, seasonal clean-ups and snow removal across the Merrimack Valley — run year-round by Timothy and Elijah.",
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      style={{ colorScheme: "light dark" }}
    >
      <body className="min-h-full flex flex-col bg-khaki text-ink">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
