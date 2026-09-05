import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-primary/15 bg-base-100/95 px-6 backdrop-blur">
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/icon-mark.png"
            alt="S&M Yard and Beyond Services"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="hidden font-display text-sm font-semibold uppercase leading-tight text-neutral sm:block">
            Yard &amp; Beyond
            <br />
            Services
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-1 px-1 font-display text-sm font-medium text-neutral">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content menu-sm z-10 mt-3 w-48 rounded-box bg-base-100 p-2 font-display shadow">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/contact" className="btn btn-secondary font-display text-sm text-secondary-content">
          Request a quote
        </Link>
      </div>
    </div>
  );
}
