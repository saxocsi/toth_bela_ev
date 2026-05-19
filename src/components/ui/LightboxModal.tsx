"use client";

import Image from "next/image";
import { useEffect } from "react";

type LightboxModalProps = {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

const LightboxModal = ({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev?.();
      if (event.key === "ArrowRight") onNext?.();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Referencia kép megnyitva"
    >
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative w-full max-w-5xl">
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm"
          >
            Bezárás (ESC)
          </button>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">
            <div className="relative aspect-[16/10]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm text-white/80">
            <button
              onClick={onPrev}
              className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10"
            >
              ← Előző
            </button>
            <button
              onClick={onNext}
              className="rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10"
            >
              Következő →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
