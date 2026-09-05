import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Request a free estimate from ${business.name}. Call ${business.phone} or send your project details online.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">Contact us</h1>
            <p className="mt-2 max-w-xl text-primary-content/85">
              Call, email, or send your project details below — {business.owners[0]} or{" "}
              {business.owners[1]} will get back to you personally.
            </p>
          </div>
        </section>
        <Contact showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
