"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/data";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b border-primary/10 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto max-w-6xl px-3 sm:px-6">
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/brand/icon-lime-cropped.png"
              alt="SM Yard and Beyond Services"
              width={91}
              height={32}
              className="h-9 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 px-1 font-display text-sm font-medium text-neutral">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-field px-3 py-2 transition-colors after:absolute after:bottom-0.5 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-secondary after:transition-transform after:content-[''] ${
                      isActive
                        ? "text-primary after:scale-x-100"
                        : "hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 font-display text-sm font-semibold text-primary transition-colors hover:text-secondary lg:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {business.phone}
          </a>

          <span className="hidden h-6 w-px bg-primary/15 lg:block" />

          <Link
            href="/contact"
            className="btn btn-secondary btn-sm font-display text-xs font-semibold text-secondary-content shadow-sm transition-all hover:shadow-md hover:brightness-105 active:scale-95 sm:btn-md sm:text-sm"
          >
            <span className="hidden sm:inline">Request a quote</span>
            <span className="sm:hidden">Quote</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn btn-ghost btn-square md:hidden"
          >
            <span className="relative block h-6 w-6">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-5 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        className={`grid overflow-hidden border-primary/15 bg-base-100 font-display text-base font-medium text-neutral transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr] border-t opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="flex flex-col overflow-hidden px-3 py-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <li
                key={link.href}
                className={`transition-all duration-300 ease-out ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-field px-3 py-3 transition-colors ${
                    isActive ? "bg-base-200 text-primary" : "hover:bg-base-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-1 border-t border-primary/10 pt-2">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 rounded-field px-3 py-3 text-primary transition-colors hover:bg-base-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {business.phone}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
