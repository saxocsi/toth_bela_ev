"use client";

import { siteConfig } from "@/config/siteConfig";

const MobileStickyCtaBar = () => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur p-3 shadow-soft">
        <a
          href={`tel:${siteConfig.company.phone}`}
          className="rounded-xl bg-white text-black py-3 text-center font-semibold"
          aria-label="Hívás most"
        >
          <span aria-hidden="true">📞 </span>Hívás
        </a>
        <a
          href="/contact"
          className="rounded-xl border border-white/30 text-white py-3 text-center font-semibold hover:bg-white hover:text-black transition"
          aria-label="Árajánlat kérése"
        >
          <span aria-hidden="true">✉️ </span>Ajánlat
        </a>
      </div>
    </div>
  );
};

export default MobileStickyCtaBar;
