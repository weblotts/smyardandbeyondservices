import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: `About | ${business.name}`,
  description: `Meet ${business.owners[0]} and ${business.owners[1]}, the two owners who personally run every job for ${business.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">About us</h1>
            <p className="mt-4 max-w-xl text-primary-content/85">
              The people behind {business.name} — and why we run it this way.
            </p>
          </div>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
