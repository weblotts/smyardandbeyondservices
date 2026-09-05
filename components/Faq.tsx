import { business, towns } from "@/lib/data";

const faqs = [
  {
    question: "Do you work year-round?",
    answer:
      "Yes. Most landscaping crews quiet down in the cold — we don't. We run spring clean-up through summer mowing, fall clean-up, and snow removal all winter.",
  },
  {
    question: "Who actually does the work?",
    answer: `${business.owners[0]} and ${business.owners[1]} — no subcontractors, no rotating crew. Whoever quotes your job is the same person who shows up to do it.`,
  },
  {
    question: "What towns do you serve?",
    answer: `We cover ${towns.length} towns across Massachusetts and southern New Hampshire, based in the Merrimack Valley. If you're just outside these towns, reach out anyway — if it's close by, we can usually make it work.`,
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call, email, or send your project details through our contact form. We'll follow up personally — usually the same day — with a straight estimate, no pressure and no upsell.",
  },
];

export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="border-b border-primary/15 bg-base-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Common questions
        </h2>

        <div className="mt-8 divide-y divide-primary/15 border-t border-primary/15">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-primary">
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
