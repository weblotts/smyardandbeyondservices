"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero/patio.jpg", alt: "A finished stone patio and landscaping project" },
  { src: "/hero/mowing.jpg", alt: "Mowing a well-kept lawn" },
  { src: "/hero/landscaping.jpg", alt: "A landscaped backyard with stonework and fresh lawn" },
];

const AUTO_ADVANCE_MS = 4000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-72 overflow-hidden rounded-box border border-primary-content/20 shadow-[6px_6px_0_0_var(--color-lime)] sm:h-96 md:h-[420px]">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
