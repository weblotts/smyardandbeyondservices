import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { business } from "@/lib/data";

export default function Hero({ townName }: { townName?: string }) {
  const place = townName ?? "the Merrimack Valley";

  return (
    <section className="border-b border-primary/15 bg-primary text-primary-content md:h-[calc(100vh-4.5rem)] md:overflow-hidden">
      <div className="mx-auto grid h-full max-w-6xl gap-6 px-6 py-8 md:grid-cols-2 md:items-center md:gap-10 md:py-0">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Yard work that doesn&apos;t stop when the leaves do.
          </h1>
          <p className="mt-3 max-w-lg text-sm text-primary-content/85 sm:text-base md:mt-5 md:text-lg">
            {business.owners[0]} and {business.owners[1]} run every job in {place} themselves —
            spring clean-up through summer mowing, fall clean-up, and snow removal all winter.
            Most crews quiet down in the cold. We don&apos;t.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-8 md:gap-4">
            <Link href="/contact" className="btn btn-secondary btn-sm font-display text-secondary-content md:btn-md">
              Get a free estimate
            </Link>
            <Link href="/services" className="btn btn-outline btn-sm border-primary-content/40 font-display text-primary-content hover:bg-primary-content/10 hover:border-primary-content/40 md:btn-md">
              See our services
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 md:h-full">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
