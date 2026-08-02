"use client";

import { type TouchEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Github, Linkedin } from "lucide-react";
import {
  HERO_IMAGES,
  HERO_PERSONAS,
  HERO_ROLE_CLASSES,
} from "@/constants/portfolio";

type Role = keyof typeof HERO_ROLE_CLASSES;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swipeStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    HERO_IMAGES.forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  const roles = useMemo(() => ({ center: activeIndex, left: (activeIndex + 3) % 4, right: (activeIndex + 1) % 4 }), [activeIndex]);
  const roleFor = (index: number): Role => index === roles.center ? "center" : index === roles.left ? "left" : index === roles.right ? "right" : "back";
  const navigate = (step: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(previous => (previous + step + 4) % 4);
    window.setTimeout(() => setIsAnimating(false), 650);
  };
  const persona = HERO_PERSONAS[activeIndex];
  const SocialIcon = activeIndex === 1 ? Github : Linkedin;
  const handleSwipe = ({ changedTouches }: TouchEvent) => {
    const { clientX: x, clientY: y } = changedTouches[0];
    const dx = x - swipeStart.current.x;
    const dy = y - swipeStart.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) navigate(dx < 0 ? 1 : -1);
  };

  return (
    <section className="sticky top-0 h-screen w-full touch-pan-y overflow-hidden text-white transition-colors duration-[650ms]"
      style={{ backgroundColor: HERO_IMAGES[activeIndex].bg }} id="top"
      onTouchStart={({ touches }) => { swipeStart.current = { x: touches[0].clientX, y: touches[0].clientY }; }} onTouchEnd={handleSwipe}>
      <div className="pointer-events-none absolute inset-0 z-50 opacity-40" />
      <h1 className="hero-word hero-word-fill">{persona.ghost}</h1>
      <div className="absolute inset-0 z-[3]" aria-label="Pratham's working modes">
        {HERO_IMAGES.map((image, index) => {
          const role = roleFor(index);
          return <div className={`absolute aspect-[.6/1] transition-all duration-[650ms] ease-in-out ${HERO_ROLE_CLASSES[role]}`} key={image.src}
            style={{
              transform: `translateX(-50%) scale(${role === "center" ? "var(--hero-scale, 1.3)" : 1})`,
              transformOrigin: role === "center" ? "bottom center" : "center",
            }}
            aria-hidden={role !== "center"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={`h-full w-full object-contain object-bottom ${index === 1 ? "origin-bottom scale-[.88]" : ""}`}
              src={image.src} alt={role === "center" ? `${HERO_PERSONAS[index].label} character` : ""} draggable={false} />
            {role === "center" && persona.link && (
              <a
                className={`hero-callout hero-callout-${index}`}
                href={persona.link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit my ${persona.link.label}`}
              >
                {activeIndex === 3 ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ) : <SocialIcon size={20} />}
              </a>
            )}
          </div>;
        })}
      </div>
      <div className="absolute bottom-20 left-[6vw] z-[60] max-w-[340px] max-sm:bottom-6 max-sm:left-4 max-sm:max-w-[260px]">
        <p className="mb-3 text-[22px] font-bold tracking-[.02em] max-sm:text-base">{persona.label}</p>
        <span className="block text-sm leading-relaxed opacity-85 max-sm:hidden">{persona.copy}</span>
        <div className="mt-5 flex gap-3 max-sm:hidden">{[-1, 1].map(step => <button className="grid size-16 place-items-center rounded-full border-2 border-white
          bg-transparent text-white transition hover:scale-108 hover:bg-white/10 max-sm:size-12" onClick={() => navigate(step)}
          aria-label={step < 0 ? "Previous character" : "Next character"}
          key={step}>{step < 0 ? <ArrowLeft size={26} /> : <ArrowRight size={26} />}</button>)}
        </div>
      </div>
      <a className="absolute right-[3vw] bottom-20 z-[60] flex items-center gap-2.5 font-[Anton] text-[clamp(20px,4vw,56px)] tracking-[-.02em] max-sm:right-4
        max-sm:bottom-6 max-sm:text-xl" href="#experience">
        DISCOVER IT
        <ArrowRight className="size-8 max-sm:size-5" strokeWidth={2.25} />
      </a>
    </section>
  );
}
