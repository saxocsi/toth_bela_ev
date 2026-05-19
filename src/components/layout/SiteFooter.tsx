import { siteConfig } from "@/config/siteConfig";
import Divider from "@/components/ui/Divider";

const CURRENT_YEAR = new Date().getFullYear();

const SiteFooter = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-semibold">{siteConfig.company.name}</div>
            <div className="text-sm text-neutral-400 mt-1">
              {siteConfig.company.area} • {siteConfig.company.experienceLine}
            </div>
          </div>

          <div className="text-sm text-neutral-300">
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

        <Divider className="my-8" />

        <div className="text-xs text-neutral-500">
          © {CURRENT_YEAR} {siteConfig.company.name}. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
