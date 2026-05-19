import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "../ui/SectionContainer";

const TestimonialsSection = () => {
  return (
    <SectionContainer className="py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Vélemények</h2>
      <p className="mt-2 text-sm text-neutral-400 max-w-xl">
        Ha még nincs valódi vélemény, ezek placeholder szövegek – később
        cserélhetők.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {siteConfig.testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm text-neutral-200 leading-relaxed">
              “{item.text}”
            </div>
            <div className="mt-5 text-sm font-semibold text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
