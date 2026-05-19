import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "../ui/SectionContainer";
import ServiceCard from "../ui/ServiceCard";

const ServicesPreviewSection = () => {
  return (
    <SectionContainer className="py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Szolgáltatások</h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl">
            Korrekt ár, pontos ütemezés, prémium kivitelezés – Budapest és
            környéke.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteConfig.services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.shortDescription}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ServicesPreviewSection;
