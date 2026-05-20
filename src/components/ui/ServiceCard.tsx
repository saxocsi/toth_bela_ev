import PrimaryButton from "./PrimaryButton";
import { siteConfig } from "@/config/siteConfig";

type ServiceCardProps = {
  title: string;
  description: string;
  showAction?: boolean;
};

const ServiceCard = ({ title, description, showAction = true }: ServiceCardProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
        {description}
      </div>
      {showAction && (
        <div className="mt-5">
          <PrimaryButton href={`tel:${siteConfig.company.phone}`} size="sm">
            Hívás
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
