import type { Metadata } from "next";
import Header from "@/components/Header";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: `Service Area | ${business.name}`,
  description:
    "S&M Yard and Beyond serves Westford, Nashua, Lowell, Chelmsford, Billerica, Tewksbury, Littleton, Ayer, Tyngsboro, Dracut and Acton.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Where we work</h1>
            <p className="mt-4 max-w-xl text-primary-content/85">
              Eleven towns across the Merrimack Valley, in Massachusetts and southern New
              Hampshire. Tap your town for local details.
            </p>
          </div>
        </section>
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
