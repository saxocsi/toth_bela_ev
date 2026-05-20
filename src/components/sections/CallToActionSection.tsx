import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";
import PrimaryButton from "@/components/ui/PrimaryButton";

const CallToActionSection = () => {
  return (
    <SectionContainer className="py-4">
      <div className="surface-readable rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-readable-soft">
            Egyeztessünk telefonon
          </h2>
          <p className="mt-2 text-sm text-neutral-300 max-w-xl">
            Hívj minket vagy küldj üzenetet. Budapest és környéke.
          </p>
        </div>
        <div className="flex gap-3">
          <PrimaryButton
            href={`tel:${siteConfig.company.phone}`}
          >
            Hívás
          </PrimaryButton>
          <PrimaryButton href={`mailto:${siteConfig.company.email}`} variant="secondary">
            Email
          </PrimaryButton>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToActionSection;
