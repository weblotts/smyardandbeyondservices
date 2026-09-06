"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { activePromotions } from "@/lib/data";

// Bump the suffix if you want the popup to reappear for everyone (e.g. a new season).
const STORAGE_KEY = "sm-promo-seen:v1";

export default function PromoPopup() {
  const [promo, setPromo] = useState<ReturnType<typeof activePromotions>[number] | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* storage unavailable — still show */
    }
    const [first] = activePromotions();
    if (first) setPromo(first);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setPromo(null);
  }

  if (!promo) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Seasonal promotion"
      className="fixed bottom-4 right-4 z-40 w-[calc(100%-2rem)] max-w-sm rounded-lg border-2 border-primary bg-base-100 p-5 shadow-xl"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss promotion"
        className="btn btn-ghost btn-xs btn-circle absolute right-2 top-2"
      >
        ✕
      </button>
      <p className="font-mono text-xs uppercase tracking-wide text-primary">Seasonal offer</p>
      <h3 className="mt-1 font-display text-lg font-bold text-primary">{promo.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral">{promo.detail}</p>
      {promo.cta && (
        <Link
          href={promo.cta.href}
          onClick={dismiss}
          className="btn btn-primary btn-sm mt-4"
        >
          {promo.cta.label}
        </Link>
      )}
    </div>
  );
}
