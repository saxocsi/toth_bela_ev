import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";
import ServiceCard from "@/components/ui/ServiceCard";
import Divider from "@/components/ui/Divider";

const ServiceDetailsSection = () => {
  return (
    <SectionContainer className="pb-16">
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.longDescription}
            showAction={false}
          />
        ))}
      </div>

      <Divider className="my-12" />

      <div className="surface-readable rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-readable-soft">Munkamenet</h2>
        <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
          Felmérés → Ajánlat → Kivitelezés. Átlátható kommunikáció, pontos
          ütemezés.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.workflowSteps.map((step) => (
            <div
              key={step.title}
              className="surface-item rounded-2xl p-6"
            >
              <div className="font-semibold">{step.title}</div>
              <div className="mt-2 text-sm text-neutral-200 leading-relaxed">
                {step.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Vállalási terület</h3>

          <ul className="mt-5 grid gap-2 md:grid-cols-2">
            {siteConfig.serviceAreaList.map((area) => (
              <li
                key={area}
                className="surface-item rounded-xl px-4 py-3 text-sm text-neutral-100"
              >
                <span aria-hidden="true">📍 </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServiceDetailsSection;
