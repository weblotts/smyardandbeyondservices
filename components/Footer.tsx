import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/data";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cookie-policy", label: "Cookie policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-pine-deep)] px-6 py-10 text-primary-content/70 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Image
          src="/brand/logo-white-full.png"
          alt={`${business.legalName} logo`}
          width={2484}
          height={1680}
          className="h-24 w-auto sm:h-28"
          priority={false}
        />

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-display text-sm">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary-content">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 font-display text-sm sm:flex-row sm:gap-4">
          <a href={business.phoneHref} className="hover:text-primary-content">
            {business.phone}
          </a>
          <span className="hidden h-4 w-px bg-primary-content/20 sm:block" />
          <a href={`mailto:${business.email}`} className="hover:text-primary-content">
            {business.email}
          </a>
        </div>

        <div className="w-full max-w-xs border-t border-primary-content/15 pt-6 sm:max-w-none">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} {business.legalName}. Run by {business.owners.join(" & ")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
