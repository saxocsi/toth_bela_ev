import type { Metadata } from "next";
import { buildPageSeo } from "@/config/seo";
import { siteConfig } from "@/config/siteConfig";
import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import PageHeroSection from "@/components/sections/PageHeroSection";
import CallToActionSection from "@/components/sections/CallToActionSection";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = buildPageSeo({
  title: "Rólunk – Tóth Bela EV (30+ év tapasztalat) Budapest és környéke",
  description:
    "Tóth Bela EV – 1990 óta a szakmában. Profi csapat, pontos határidők, garancia. Burkolás, kőműves munkák, generál kivitelezés.",
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd("/about");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeroSection
        title="Rólunk"
        subtitle={`${siteConfig.company.name} – ${siteConfig.company.experienceLine}. Budapest és környéke.`}
        badges={["megbízhatóság", "garancia", "pontos határidők"]}
      />
      <AboutSection />
      <CallToActionSection />
    </>
  );
}
