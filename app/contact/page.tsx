import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact | ${business.name}`,
  description: `Request a free estimate from ${business.name}. Call ${business.phone} or send your project details online.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in touch</h1>
            <p className="mt-4 max-w-xl text-primary-content/85">
              Tell us about your yard. We&apos;ll follow up with a free estimate.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
