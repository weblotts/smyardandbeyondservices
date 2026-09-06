import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: `How ${business.name} uses cookies on this website.`,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <h1 className="font-display text-3xl font-bold sm:text-4xl">Cookie policy</h1>
            <p className="mt-2 max-w-xl text-primary-content/85">
              What cookies this site uses and how you control them.
            </p>
          </div>
        </section>

        <section className="bg-base-100">
          <div className="mx-auto max-w-3xl space-y-6 px-6 py-14 text-base leading-relaxed text-neutral">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">What cookies are</h2>
              <p className="mt-2">
                Cookies are small text files stored on your device by your browser. They let a
                website remember things between visits, such as choices you&apos;ve made.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary">How we use them</h2>
              <p className="mt-2">
                We keep cookie use to a minimum. When you respond to the cookie notice, we store
                your choice locally in your browser so we don&apos;t ask again on every page. We may
                also use cookies to understand, in aggregate, how the site is used so we can improve
                it. We do not use cookies to identify you personally or sell any data.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary">Managing cookies</h2>
              <p className="mt-2">
                You can clear or block cookies at any time through your browser settings. Clearing
                this site&apos;s data will also reset your saved cookie choice, and the notice will
                appear again on your next visit.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-primary">Questions</h2>
              <p className="mt-2">
                Reach us at{" "}
                <a href={`mailto:${business.email}`} className="link link-primary">
                  {business.email}
                </a>{" "}
                or {business.phone}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
