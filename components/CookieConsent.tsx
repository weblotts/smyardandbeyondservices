"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sm-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function respond(choice: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable — just dismiss */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/15 bg-base-100 px-6 py-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-neutral">
          We use cookies to keep the site working and understand how it&apos;s used. See our{" "}
          <Link href="/cookie-policy" className="link link-primary">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => respond("rejected")}
            className="btn btn-outline btn-sm"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => respond("accepted")}
            className="btn btn-primary btn-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
