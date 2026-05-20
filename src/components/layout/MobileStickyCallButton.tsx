"use client";

import { siteConfig } from "@/config/siteConfig";

const MobileStickyCtaBar = () => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${siteConfig.company.phone}`}
          className="rounded-xl bg-white py-3 text-center font-semibold text-black shadow-lg shadow-black/30"
          aria-label="Hívás most"
        >
          <span aria-hidden="true">📞 </span>Hívás
        </a>
        <a
          href={`mailto:${siteConfig.company.email}`}
          className="rounded-xl border border-white/30 bg-neutral-950/80 py-3 text-center font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
          aria-label="Üzenet küldése"
        >
          <span aria-hidden="true">✉️ </span>Üzenet
        </a>
      </div>
    </div>
  );
};

export default MobileStickyCtaBar;
