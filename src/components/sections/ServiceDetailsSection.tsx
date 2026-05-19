import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "../ui/SectionContainer";
import Divider from "../ui/Divider";

const ServiceDetailsSection = () => {
  return (
    <SectionContainer className="pb-16">
      <div className="grid gap-6 md:grid-cols-3">
        {siteConfig.services.map((service) => (
          <div
            key={service.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-lg font-semibold">{service.title}</div>
            <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
              {service.longDescription}
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-12" />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Munkamenet</h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          Felmérés → Ajánlat → Kivitelezés. Átlátható kommunikáció, pontos
          ütemezés.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteConfig.workflowSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-black/20 p-6"
            >
              <div className="font-semibold">{step.title}</div>
              <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                {step.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Vállalási terület</h3>
          <p className="mt-2 text-sm text-neutral-400">
            SEO boost: konkrét kerületek / agglomeráció.
          </p>

          <ul className="mt-5 grid gap-2 md:grid-cols-2">
            {siteConfig.serviceAreaList.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-200"
              >
                📍 {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServiceDetailsSection;
