import type { Metadata } from "next";

import { siteConfig } from "@/config/siteConfig";
import PageHeroSection from "@/src/components/sections/PageHeroSection";
import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import { buildPageSeo } from "@/config/seo";
import ServiceDetailsSection from "@/src/components/sections/ServiceDetailsSection";
import CallToActionSection from "@/src/components/sections/CallToActionSection";

export const metadata: Metadata = buildPageSeo({
  title:
    "Szolgáltatások – Burkolás, Kőműves munkák, Generál kivitelezés (Budapest)",
  description:
    "Burkolás, kőműves munkák, hőszigetelés, térkövezés és generál kivitelezés Budapest és környékén. 30+ év tapasztalat, pontos határidők.",
  path: "/services",
});

export default function ServicesPage() {
  const jsonLd = buildLocalBusinessJsonLd("/services");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeroSection
        title="Szolgáltatások"
        subtitle="Burkolás, kőműves munkák és generál kivitelezés – Budapest és környéke."
        badges={[
          "kőműves Budapest",
          "burkoló Budapest",
          "generál kivitelezés Budapest",
          siteConfig.company.area,
        ]}
      />
      <ServiceDetailsSection />
      <CallToActionSection />
    </>
  );
}
