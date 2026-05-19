import { siteConfig } from "@/config/siteConfig";
import PrimaryButton from "../ui/PrimaryButton";
import ReferenceGallery from "../ui/ReferenceGallery";
import SectionContainer from "../ui/SectionContainer";

const ReferencesPreviewSection = () => {
  return (
    <SectionContainer className="py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Referenciák</h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-xl">
            Néhány munka a korábbi kivitelezésekből (később kategóriázható).
          </p>
        </div>
        <div className="hidden md:block">
          <PrimaryButton href="/references" variant="secondary" size="sm">
            Összes referencia
          </PrimaryButton>
        </div>
      </div>

      <div className="mt-8">
        <ReferenceGallery
          categories={siteConfig.references.categories as any}
          items={siteConfig.references.items}
          enableCategoryFilter={false}
        />
      </div>

      <div className="mt-8 md:hidden">
        <PrimaryButton href="/references" variant="secondary">
          Összes referencia
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
};

export default ReferencesPreviewSection;
