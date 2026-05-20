"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import BrandBlock from "./BrandBlock";
import { SiteSidebar } from "./SiteSidebar";

const SiteHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),linear-gradient(110deg,rgba(10,10,10,0.92)_0%,rgba(23,23,23,0.86)_48%,rgba(5,5,5,0.94)_100%)] backdrop-blur-xl">
      <div className="flex w-full items-center justify-between gap-4 py-4 px-4">
        <Link href="/" className="min-w-0" aria-label="Főoldal">
          <BrandBlock />
        </Link>

        <button
          type="button"
          aria-label="Menü megnyitása"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-950/50 text-white shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:bg-white hover:text-black"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
      <SiteSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
};

export default SiteHeader;
