"use client";

import Image from "next/image";
import { useRef } from "react";
import { useElementScrollProgress } from "@/animations/useScrollProgress";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/config/siteConfig";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Step = {
  image: string;
  stepLabel: string;
  headline: string;
  body: string;
};

const STEPS: Step[] = [
  {
    image: "/images/workflow/1.jpeg",
    stepLabel: "01 / 06",
    headline: "Alapozás, tereprendezés",
    body: "Szilárd alap nélkül nincs tartós épület. Talajelőkészítés, tereprendezés, zsaluzás és betonozás – mindent a tervek szerint.",
  },
  {
    image: "/images/workflow/2.jpeg",
    stepLabel: "02 / 06",
    headline: "Falazás, födémezés",
    body: "A szerkezeti falak és a vízszintes lemezek adják az épület vázát. Pontosság, erő és tartósság minden szinten.",
  },
  {
    image: "/images/workflow/3.jpeg",
    stepLabel: "03 / 06",
    headline: "Tetőszerkezet-építés",
    body: "Fa- vagy acélszerkezet, fedőanyag beépítése. Az épület bezárul az időjárás elől.",
  },
  {
    image: "/images/workflow/4.jpeg",
    stepLabel: "04 / 06",
    headline: "Nyílászáró-beépítés",
    body: "Ablakok, bejárati és belső ajtók. Fény, szellőzés, biztonság és energiahatékonyság egy lépésben.",
  },
  {
    image: "/images/workflow/5.jpeg",
    stepLabel: "05 / 06",
    headline: "Homlokzat, hőszigetelés",
    body: "Külső szigetelés, vakolat, festés. Energiatakarékos, időtálló és esztétikus végeredmény.",
  },
  {
    image: "/images/workflow/6.jpeg",
    stepLabel: "06 / 06",
    headline: "Térkövezés, kertépítés",
    body: "Járdák, teraszok, kerítés és kertrendezés. A ház megkapja a végleges, élhető keretét.",
  },
];

const STEP_COUNT = STEPS.length;
const HERO_UNITS = 1;
const EXIT_UNITS = 0.3;
const ANIMATION_UNITS = HERO_UNITS + STEP_COUNT + EXIT_UNITS;
const SCROLL_PAGES = 5.5;
const EXIT_FADE_START = ANIMATION_UNITS - EXIT_UNITS;

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

const remap = (v: number, i0: number, i1: number, o0: number, o1: number) =>
  o0 + (clamp(v, i0, i1) - i0) / (i1 - i0) * (o1 - o0);

// ─── Component ────────────────────────────────────────────────────────────────

export default function WorkflowScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useElementScrollProgress(containerRef);

  const timeline = progress * ANIMATION_UNITS;
  const activeStep = clamp(Math.ceil(timeline) - 1, 0, STEP_COUNT - 1);

  // ── Image opacity per step ────────────────────────────────────────────────
  const imgOpacity = (i: number): number => {
    const stepStart = HERO_UNITS + i;

    if (i === STEP_COUNT - 1) {
      const fadeIn = clamp(remap(timeline, stepStart - 0.25, stepStart, 0, 1), 0, 1);
      const fadeOut = clamp(remap(timeline, EXIT_FADE_START, ANIMATION_UNITS, 1, 0), 0, 1);
      return Math.min(fadeIn, fadeOut);
    }

    // Middle images: fade in approaching, hold, fade out leaving
    const fadeIn  = clamp(remap(timeline, stepStart - 0.25, stepStart,       0, 1), 0, 1);
    const fadeOut = clamp(remap(timeline, stepStart + 0.75, stepStart + 1.0, 1, 0), 0, 1);
    return Math.min(fadeIn, fadeOut);
  };

  // ── Hero text (step 0) ────────────────────────────────────────────────────
  const heroAlpha = clamp(remap(timeline, 0, 0.85, 1, 0), 0, 1);
  const heroY = (1 - heroAlpha) * -28;

  // ── Step text (steps 1–6) ─────────────────────────────────────────────────
  const stepStyle = (i: number): React.CSSProperties => {
    const stepStart = HERO_UNITS + i;
    const dist = timeline - stepStart;
    let alpha = 0;
    let y = 28;

    if (i === STEP_COUNT - 1 && timeline >= EXIT_FADE_START) {
      alpha = clamp(remap(timeline, EXIT_FADE_START, ANIMATION_UNITS, 1, 0), 0, 1);
      y = 0;
    } else if (dist >= 0 && dist < 1) {
      if (dist < 0.25) {
        alpha = dist / 0.25;
        y = (1 - alpha) * 28;
      } else if (dist < 0.72 || i === STEP_COUNT - 1) {
        alpha = 1;
        y = 0;
      } else {
        alpha = 1 - (dist - 0.72) / 0.28;
        y = -(1 - alpha) * 28;
      }
    } else {
      y = dist < 0 ? 28 : -28;
    }

    return {
      opacity: alpha,
      transform: `translateY(${y}px)`,
      pointerEvents: alpha > 0.5 ? "auto" : "none",
      willChange: "opacity, transform",
    };
  };

  // ── Scroll hint visibility ────────────────────────────────────────────────
  const hintAlpha = clamp(remap(timeline, 0, 0.25, 1, 0), 0, 1);

  return (
    <div ref={containerRef} style={{ height: `${(SCROLL_PAGES + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Background images ──────────────────────────────────────────── */}
        {STEPS.map((step, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{ opacity: imgOpacity(i), willChange: "opacity" }}
          >
            <Image
              src={step.image}
              alt={step.headline}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* ── Hero text (step 0) ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          style={{
            opacity: heroAlpha,
            transform: `translateY(${heroY}px)`,
            pointerEvents: heroAlpha > 0.1 ? "auto" : "none",
            willChange: "opacity, transform",
          }}
        >
          <h1 className="text-readable text-4xl md:text-6xl font-bold leading-tight text-white">
            Kőműves és burkoló Budapest területén
          </h1>
          <p className="text-readable-soft mt-5 text-lg text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.company.experienceLine}. Generál kivitelezés Budapest és
            környéke.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <PrimaryButton href={`tel:${siteConfig.company.phone}`}>
              Hívás
            </PrimaryButton>
            <PrimaryButton
              href={`mailto:${siteConfig.company.email}`}
            >
              Email
            </PrimaryButton>
          </div>
        </div>

        {/* ── Step texts (steps 1–6) ──────────────────────────────────────── */}
        {STEPS.map((step, i) => {
          return (
            <div
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              style={stepStyle(i)}
            >
              <span className="text-readable-soft text-white/60 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                {step.stepLabel}
              </span>
              <h2 className="text-readable text-3xl md:text-5xl font-bold text-white leading-tight">
                {step.headline}
              </h2>
              <p className="text-readable-soft mt-5 text-neutral-100 max-w-lg leading-relaxed text-base md:text-lg">
                {step.body}
              </p>
            </div>
          );
        })}

        {/* ── Step indicator dots ─────────────────────────────────────────── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-[6px]"
          style={{ opacity: clamp(remap(timeline, EXIT_FADE_START, ANIMATION_UNITS, 1, 0), 0, 1) }}
          aria-hidden="true"
        >
          {STEPS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500 ease-out"
              style={{
                width: i === activeStep ? "22px" : "5px",
                height: "5px",
                backgroundColor:
                  i <= activeStep
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* ── Scroll hint ─────────────────────────────────────────────────── */}
        <div
          className="absolute bottom-[72px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: hintAlpha, pointerEvents: "none" }}
          aria-hidden="true"
        >
          <span className="text-readable-soft text-white/45 text-xs tracking-widest uppercase">
            görgess
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </div>
    </div>
  );
}
