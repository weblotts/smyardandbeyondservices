import type { Metadata } from "next";
import { Zilla_Slab, Work_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const zillaSlab = Zilla_Slab({
  variable: "--font-zilla-slab",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: `${business.name} | Landscaping & Snow Removal, Merrimack Valley`,
  description:
    "Landscaping, lawn maintenance, mulch, hedge trimming, seasonal clean-ups and snow removal across the Merrimack Valley — run year-round by Sentamu and Mudoola.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${zillaSlab.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-khaki text-ink">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
