import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";

const FaqSection = () => {
  return (
    <SectionContainer className="py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold">GYIK</h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-2xl">
          Gyakori kérdések – átlátható válaszok a legfontosabb témákban.
        </p>

        <div className="mt-8 grid gap-4">
          {siteConfig.faq.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <summary className="cursor-pointer font-semibold text-neutral-100 list-none flex items-center justify-between gap-2">
                {item.question}
                <span aria-hidden="true" className="text-neutral-400 text-xs shrink-0">▼</span>
              </summary>
              <div className="mt-3 text-sm text-neutral-300 leading-relaxed">
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
