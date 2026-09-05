import { business, towns } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-pine/15 bg-pine text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Request a quote</h2>
          <p className="mt-3 max-w-md text-paper/85">
            Tell us about your yard and we&apos;ll get back to you with a free estimate.
          </p>

          <div className="mt-8 space-y-2 text-sm text-paper/85">
            <p>
              <span className="font-display font-semibold text-lime">Phone:</span>{" "}
              <a href={business.phoneHref} className="hover:underline">
                {business.phone}
              </a>
            </p>
            <p>
              <span className="font-display font-semibold text-lime">Email:</span>{" "}
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </p>
          </div>
        </div>

        {/*
          TODO before launch: wire this form up. It currently has no `action`
          and won't send anywhere. Options:
            1. Point action at a form backend like Formspree or Web3Forms
               (no server code needed), e.g. action="https://formspree.io/f/XXXXXXX" method="POST"
            2. Replace with a Next.js Server Action that emails via Resend
               or Nodemailer.
        */}
        <form className="space-y-4 rounded-lg border border-paper/20 bg-paper p-6 text-ink">
          <div>
            <label htmlFor="name" className="block font-display text-sm font-semibold text-pine-deep">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate/30 bg-khaki px-3 py-2 text-sm outline-none focus:border-pine"
            />
          </div>

          <div>
            <label htmlFor="town" className="block font-display text-sm font-semibold text-pine-deep">
              Town
            </label>
            <select
              id="town"
              name="town"
              required
              className="mt-1 w-full rounded-md border border-slate/30 bg-khaki px-3 py-2 text-sm outline-none focus:border-pine"
            >
              <option value="">Select your town</option>
              {towns.map((town) => (
                <option key={town.slug} value={town.name}>
                  {town.name}, {town.state}
                </option>
              ))}
              <option value="other">Other / nearby</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block font-display text-sm font-semibold text-pine-deep">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              placeholder="What do you need done?"
              className="mt-1 w-full rounded-md border border-slate/30 bg-khaki px-3 py-2 text-sm outline-none focus:border-pine"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-lime px-6 py-3 font-display text-sm font-semibold text-pine-deep transition-colors hover:bg-lime-deep"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}
