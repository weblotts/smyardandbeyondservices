import { seasons } from "@/lib/data";

export default function Seasons() {
  return (
    <section id="seasons" className="border-b border-pine/15 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-pine-deep sm:text-4xl">
          A crew for every season
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          Lawn companies that vanish in November aren&apos;t doing you any favors come January.
          Here&apos;s what we&apos;re doing at your place all year.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season) => (
            <div
              key={season.name}
              className="rounded-lg border-2 border-pine bg-khaki p-5"
            >
              <h3 className="font-display text-xl font-bold text-pine-deep">
                {season.name}
              </h3>
              <p className="mt-2 text-sm text-slate">{season.blurb}</p>
              <ul className="mt-4 space-y-1 border-t border-pine/20 pt-3 font-mono text-xs text-pine-deep">
                {season.services.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
