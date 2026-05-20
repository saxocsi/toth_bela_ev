import { siteConfig } from "@/config/siteConfig";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ReferenceGallery from "@/components/ui/ReferenceGallery";
import SectionContainer from "@/components/ui/SectionContainer";

const ReferencesPreviewSection = () => {
  return (
    <SectionContainer className="py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-readable-soft">Referenciák</h2>
          <p className="mt-2 text-sm text-neutral-300 max-w-xl text-readable-soft">
            Néhány munka a korábbi kivitelezésekből.
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
          categories={siteConfig.references.categories}
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
