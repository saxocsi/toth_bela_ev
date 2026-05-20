import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";

const FaqSection = () => {
  return (
    <SectionContainer className="py-16">
      <div className="surface-readable rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-readable-soft">GYIK</h2>
        <p className="mt-2 text-sm text-neutral-300 max-w-2xl">
          Gyakori kérdések – átlátható válaszok a legfontosabb témákban.
        </p>

        <div className="mt-8 grid gap-4">
          {siteConfig.faq.map((item) => (
            <details
              key={item.question}
              className="surface-item rounded-2xl p-5"
            >
              <summary className="cursor-pointer font-semibold text-neutral-100 list-none flex items-center justify-between gap-2">
                {item.question}
                <span aria-hidden="true" className="text-neutral-400 text-xs shrink-0">▼</span>
              </summary>
              <div className="mt-3 text-sm text-neutral-200 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default FaqSection;
