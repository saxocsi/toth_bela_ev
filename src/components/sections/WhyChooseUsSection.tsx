import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";

const WhyChooseUsSection = () => {
  return (
    <SectionContainer className="pt-8 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Miért minket?</h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          Bizalomépítő, átlátható kivitelezés – a cél a tartós minőség.
        </p>

        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {siteConfig.whyChooseUs.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-neutral-200"
            >
              <span aria-hidden="true">✅ </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;
