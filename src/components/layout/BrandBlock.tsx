import { Hammer } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const BrandBlock = () => {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-1.5 text-base font-semibold tracking-tight">
        <span>{siteConfig.company.name}</span>
         <Hammer className="h-4 w-4 shrink-0" strokeWidth={2.2} />
      </div>

      <div className="text-xs text-neutral-400">
        {siteConfig.company.area}
      </div>
    </div>
  );
};

export default BrandBlock;