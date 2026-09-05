import { business, towns } from "@/lib/data";

export default function Contact() {
  return (
    <section className="border-b border-primary/15 bg-primary text-primary-content">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Request a quote</h2>
          <p className="mt-3 max-w-md text-primary-content/85">
            Tell us about your yard and we&apos;ll get back to you with a free estimate.
          </p>

          <div className="mt-8 space-y-2 text-sm text-primary-content/85">
            <p>
              <span className="font-display font-semibold text-secondary">Phone:</span>{" "}
              <a href={business.phoneHref} className="hover:underline">
                {business.phone}
              </a>
            </p>
            <p>
              <span className="font-display font-semibold text-secondary">Email:</span>{" "}
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
        <form className="card space-y-4 border border-primary-content/20 bg-base-100 p-6 text-base-content">
          <div>
            <label htmlFor="name" className="label font-display text-sm font-semibold text-primary">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="input input-bordered w-full bg-base-200 text-sm"
            />
          </div>

          <div>
            <label htmlFor="town" className="label font-display text-sm font-semibold text-primary">
              Town
            </label>
            <select
              id="town"
              name="town"
              required
              defaultValue=""
              className="select select-bordered w-full bg-base-200 text-sm"
            >
              <option value="" disabled>
                Select your town
              </option>
              {towns.map((town) => (
                <option key={town.slug} value={town.name}>
                  {town.name}, {town.state}
                </option>
              ))}
              <option value="other">Other / nearby</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="label font-display text-sm font-semibold text-primary">
              Project details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              placeholder="What do you need done?"
              className="textarea textarea-bordered w-full bg-base-200 text-sm"
            />
          </div>

          <button type="submit" className="btn btn-secondary w-full font-display text-secondary-content">
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}
