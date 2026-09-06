import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="border-b border-primary/15 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          What we do
        </h2>
        <p className="mt-3 max-w-2xl text-neutral">
          We deliver a number of services to improve, maintain, and uplift your property. Here&apos;s
          what we cover and when.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="card border border-primary/15 bg-base-100">
              <div className="card-body gap-2 p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="card-title font-display text-lg text-primary">
                    {service.name}
                  </h3>
                  <span className="badge badge-outline badge-accent shrink-0 font-mono text-[11px]">
                    {service.season}
                  </span>
                </div>
                <p className="text-sm text-neutral">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
