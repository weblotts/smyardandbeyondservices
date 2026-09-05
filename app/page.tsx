import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Seasons from "@/components/Seasons";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: `${business.name} | Landscaping & Snow Removal, Merrimack Valley`,
  description:
    "Landscaping, lawn maintenance, mulch, hedge trimming, seasonal clean-ups and snow removal across the Merrimack Valley — run year-round by Sentamu and Mudoola.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Seasons />
        <ServiceArea />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
