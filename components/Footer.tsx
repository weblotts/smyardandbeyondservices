import Link from "next/link";
import { business } from "@/lib/data";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary-deep gap-4 bg-[var(--color-pine-deep)] px-6 py-10 text-primary-content/70">
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-display text-sm">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-primary-content">
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-sm">
        © {new Date().getFullYear()} {business.legalName}. Run by {business.owners.join(" & ")}.
      </p>
    </footer>
  );
}
