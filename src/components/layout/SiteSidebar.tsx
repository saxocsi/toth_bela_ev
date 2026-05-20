"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Phone, Mail, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import BrandBlock from "./BrandBlock";

type SiteSidebarProps = {
  open: boolean;
  onClose: () => void;
};

const navigationItems = [
  { href: "/services", label: "Szolgáltatások" },
  { href: "/references", label: "Referenciák" },
  { href: "/about", label: "Rólunk" },
];

export function SiteSidebar({ open, onClose }: SiteSidebarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 z-0 bg-neutral-950/65 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Oldalsó navigáció"
        className={`absolute right-0 top-0 z-10 flex h-dvh w-full max-w-full flex-col overflow-y-auto border-l border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(120,113,108,0.22),transparent_32%),linear-gradient(145deg,#050505_0%,#171717_48%,#0a0a0a_100%)] text-white shadow-2xl shadow-black/50 transition-transform duration-300 sm:w-96 sm:max-w-96 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <BrandBlock />

          <button
            type="button"
            aria-label="Menü bezárása"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-950/60 text-white shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:bg-white hover:text-black"
            onClick={onClose}
          >
            <X className="h-5 w-5" strokeWidth={1.9} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between px-5 py-6 sm:px-6 sm:py-8">
          <nav>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group surface-item flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-900/80"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-300 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
            >
              <Phone className="h-4 w-4" />
              Hívás
            </a>
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-neutral-950/60 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
