import Header from "@/components/Header";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Area",
  description:
    "S&M Yard and Beyond serves Westford, Nashua, Lowell, Chelmsford, Billerica, Tewksbury, Littleton, Ayer, Tyngsboro, Dracut and Acton.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Service Area", path: "/service-areas" }]} />
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
        <ServiceArea showHeading={false} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
