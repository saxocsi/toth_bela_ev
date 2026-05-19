"use client";
import { useEffect, useState } from "react";

export function useElementScrollProgress<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = -el.getBoundingClientRect().top / scrollable;
      setProgress(Math.max(0, Math.min(1, p)));
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [ref]);

  return progress;
}
