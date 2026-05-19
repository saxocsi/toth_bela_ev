import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { buildPageSeo } from "@/config/seo";
import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import PageHeroSection from "@/components/sections/PageHeroSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import SectionContainer from "@/components/ui/SectionContainer";
import ReferenceGallery from "@/components/ui/ReferenceGallery";

export const metadata: Metadata = buildPageSeo({
  title: "Referenciák – Burkolás és kőműves munkák Budapest környékén",
  description:
    "Galéria korábbi munkáinkból: fürdő, konyha, terasz, homlokzat. Burkoló és kőműves Budapest és környéke.",
  path: "/references",
});

export default function ReferencesPage() {
  const jsonLd = buildLocalBusinessJsonLd("/references");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeroSection
        title="Referenciák"
        subtitle="Néhány munka a korábbi kivitelezésekből. Később kategóriákkal bővíthető."
        badges={[siteConfig.company.area, "galéria", "prémium kivitelezés"]}
      />

      <SectionContainer className="pb-16">
        <ReferenceGallery
          categories={siteConfig.references.categories}
          items={siteConfig.references.items}
          enableCategoryFilter
        />
      </SectionContainer>

      <CallToActionSection />
    </>
  );
}
