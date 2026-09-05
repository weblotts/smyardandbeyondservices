import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-pine/15 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pine font-display text-lg font-bold text-lime">
            S&M
          </span>
          <span className="hidden font-display text-sm font-semibold uppercase leading-tight text-slate sm:block">
            Yard &amp; Beyond
            <br />
            Services
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-sans text-sm font-medium text-slate md:flex">
          <Link href="/#services" className="hover:text-pine">
            Services
          </Link>
          <Link href="/#seasons" className="hover:text-pine">
            Year round
          </Link>
          <Link href="/#area" className="hover:text-pine">
            Service area
          </Link>
          <Link href="/#about" className="hover:text-pine">
            About
          </Link>
        </nav>

        <Link
          href="/#contact"
          className="rounded-md bg-lime px-4 py-2 font-display text-sm font-semibold text-pine-deep transition-colors hover:bg-lime-deep"
        >
          Request a quote
        </Link>
      </div>
    </header>
  );
}
