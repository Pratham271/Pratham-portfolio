"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  { src: "/characters/orange.png", bg: "#D9856D" },
  { src: "/characters/green.png", bg: "#8FA183" },
  { src: "/characters/pink.png", bg: "#B7A5C8" },
  { src: "/characters/blue.png", bg: "#8CA6B7" },
] as const;

const personas = [
  { label: "BUILDER MODE", ghost: "BUILD", copy: "I turn ambitious ideas into focused products, reliable systems, and software people can actually use." },
  { label: "AGENT MODE", ghost: "AGENTS", copy: "I build AI agents, MCP servers, infrastructure, and integrations that keep working beyond the demo." },
  { label: "PRODUCT MODE", ghost: "CRAFT", copy: "I make complex technology feel direct, useful, and unusually polished." },
  { label: "SHIP MODE", ghost: "SCALE", copy: "I work from first prototype to production, connecting product thinking with full stack engineering." },
] as const;

type Role = "center" | "left" | "right" | "back";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    images.forEach(({ src }) => { const image = new Image(); image.src = src; });
  }, []);

  const roles = useMemo(() => ({ center: activeIndex, left: (activeIndex + 3) % 4, right: (activeIndex + 1) % 4 }), [activeIndex]);
  const roleFor = (index: number): Role => index === roles.center ? "center" : index === roles.left ? "left" : index === roles.right ? "right" : "back";
  const navigate = (step: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(previous => (previous + step + 4) % 4);
    window.setTimeout(() => setIsAnimating(false), 650);
  };
  const persona = personas[activeIndex];

  return <section className="toonHero" style={{ backgroundColor: images[activeIndex].bg }} id="top">
    <div className="toonGrain" />
    <div className="toonGhost">{persona.ghost}</div>
    <div className="carousel" aria-label="Pratham's working modes">
      {images.map((image, index) => {
        const role = roleFor(index);
        return <div className={`character character-${role}${index === 1 ? " character-green" : ""}`} key={image.src} aria-hidden={role !== "center"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={role === "center" ? `${personas[index].label} character` : ""} draggable={false} />
        </div>;
      })}
    </div>
    <div className="personaCopy"><p>{persona.label}</p><span>{persona.copy}</span><div className="carouselButtons"><button onClick={() => navigate(-1)} aria-label="Previous character"><ArrowLeft size={26} strokeWidth={2.25} /></button><button onClick={() => navigate(1)} aria-label="Next character"><ArrowRight size={26} strokeWidth={2.25} /></button></div></div>
    <a className="discover" href="#experience">DISCOVER IT <ArrowRight strokeWidth={2.25} /></a>
  </section>;
}
