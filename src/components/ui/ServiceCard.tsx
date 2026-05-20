import PrimaryButton from "./PrimaryButton";
import { siteConfig } from "@/config/siteConfig";

type ServiceCardProps = {
  title: string;
  description: string;
  showAction?: boolean;
};

const ServiceCard = ({ title, description, showAction = true }: ServiceCardProps) => {
  return (
    <div className="surface-readable rounded-2xl p-6 transition hover:bg-neutral-900/80">
      <div className="text-lg font-semibold text-readable-soft">{title}</div>
      <div className="mt-3 text-sm text-neutral-200 leading-relaxed">
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
