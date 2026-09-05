import { seasons } from "@/lib/data";

export default function Seasons() {
  return (
    <section className="border-b border-primary/15 bg-base-100">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          A crew for every season
        </h2>
        <p className="mt-3 max-w-2xl text-neutral">
          Lawn companies that vanish in November aren&apos;t doing you any favors come January.
          Here&apos;s what we&apos;re doing at your place all year.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((season) => (
            <div key={season.name} className="card border-2 border-primary bg-base-200">
              <div className="card-body gap-3 p-5">
                <h3 className="card-title font-display text-xl text-primary">
                  {season.name}
                </h3>
                <p className="text-sm text-neutral">{season.blurb}</p>
                <ul className="space-y-1 border-t border-primary/20 pt-3 font-mono text-xs text-primary">
                  {season.services.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
