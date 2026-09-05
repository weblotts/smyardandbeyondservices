import { business } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-pine/15 bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-pine-deep sm:text-4xl">
          Two guys, every job
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate">
          {business.owners[0]} and {business.owners[1]} started S&amp;M Yard and Beyond because they
          were tired of seeing homeowners get passed between salespeople, subcontractors, and
          whoever happened to show up that day.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate">
          When you call, you&apos;re talking to one of us. When we quote a job, one of us wrote it.
          When the work gets done, one of us is holding the tools — not a rotating crew we&apos;ve
          never met. Same goes for the invoice at the end. You know exactly who did the work and
          who to call if something&apos;s not right.
        </p>
      </div>
    </section>
  );
}
