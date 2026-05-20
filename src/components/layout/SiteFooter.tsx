import { siteConfig } from "@/config/siteConfig";
import Divider from "@/components/ui/Divider";

const CURRENT_YEAR = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <footer className="mt-12 border-t border-white/10 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%),linear-gradient(110deg,rgba(10,10,10,0.88)_0%,rgba(23,23,23,0.78)_52%,rgba(5,5,5,0.9)_100%)] backdrop-blur-xl">
      <div className="px-4 py-6 text-readable-soft md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight">
              {siteConfig.company.name}
            </div>
            <div className="mt-1 text-xs text-neutral-300">
              {siteConfig.company.area} • {siteConfig.company.experienceLine}
            </div>
          </div>

          <div className="text-xs text-neutral-200">
            <div>
              Telefon:{" "}
              <a
                className="underline underline-offset-4 hover:text-white transition"
                href={`tel:${siteConfig.company.phone}`}
              >
                {siteConfig.company.phone}
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:text-white transition"
                href={`mailto:${siteConfig.company.email}`}
              >
                {siteConfig.company.email}
              </a>
            </div>
          </div>
        </div>

        <Divider className="my-5" />

        <div className="text-xs text-neutral-400">
          © {CURRENT_YEAR} {siteConfig.company.name}. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
