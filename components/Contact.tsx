import Link from "next/link";
import { business, towns } from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="border-b border-primary/15 bg-primary text-primary-content">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <QuoteForm />

        <div className="min-w-0">
          {showHeading && (
            <>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Request a quote</h2>
              <p className="mt-3 max-w-md text-primary-content/85">
                Tell us about your yard and we&apos;ll get back to you with a free estimate.
              </p>
            </>
          )}

          <div className={`flex flex-col gap-4 ${showHeading ? "mt-8" : ""}`}>
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 rounded-box border border-primary-content/15 bg-primary-content/5 px-4 py-3 transition hover:bg-primary-content/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-content">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xs font-semibold uppercase tracking-wide text-secondary">
                  Call us
                </span>
                <span className="block truncate font-display font-semibold">{business.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 rounded-box border border-primary-content/15 bg-primary-content/5 px-4 py-3 transition hover:bg-primary-content/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-content">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xs font-semibold uppercase tracking-wide text-secondary">
                  Email us
                </span>
                <span className="block truncate font-display font-semibold">{business.email}</span>
              </span>
            </a>
          </div>

          <div className="mt-10 rounded-box border border-primary-content/15 bg-primary-content/5 p-5">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-secondary">
              Where we work
            </h3>
            <p className="mt-2 text-sm text-primary-content/85">
              {towns.length} towns across Massachusetts and southern New Hampshire, run year-round
              by {business.owners[0]} and {business.owners[1]} — no subcontractors, no rotating
              crew.
            </p>
            <Link
              href="/service-areas"
              className="mt-3 inline-block font-display text-sm font-semibold text-secondary hover:underline"
            >
              See all service areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
