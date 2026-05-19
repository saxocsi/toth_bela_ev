import { siteConfig } from "@/config/siteConfig";
import NavLink from "./NavLink";
import PrimaryButton from "../ui/PrimaryButton";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="text-base font-semibold tracking-tight">
            {siteConfig.company.name}
          </div>
          <div className="text-xs text-neutral-400">
            {siteConfig.company.area}
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" label="Főoldal" />
          <NavLink href="/services" label="Szolgáltatások" />
          <NavLink href="/references" label="Referenciák" />
          <NavLink href="/about" label="Rólunk" />
          <NavLink href="/contact" label="Kapcsolat" />
        </nav>

        <div className="flex items-center gap-2">
          <PrimaryButton href="/contact" size="sm">
            Árajánlat
          </PrimaryButton>
          <PrimaryButton
            href={`tel:${siteConfig.company.phone}`}
            variant="secondary"
            size="sm"
          >
            Hívás
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
