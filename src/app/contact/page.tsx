import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { buildPageSeo } from "@/config/seo";
import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import PageHeroSection from "@/src/components/sections/PageHeroSection";
import ContactSection from "@/src/components/sections/ContactSection";

export const metadata: Metadata = buildPageSeo({
  title: "Kapcsolat – Hívás / Email 1 kattintással (Budapest és környéke)",
  description:
    "Árajánlatkérés 1 kattintással: telefon vagy előre kitöltött email. Tóth Bela EV – Budapest és környéke.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = buildLocalBusinessJsonLd("/contact");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeroSection
        title="Kapcsolat"
        subtitle="Kattints és hívj, vagy küldj előre kitöltött emailt ajánlatkéréshez."
        badges={[siteConfig.company.area, "tel:", "mailto:"]}
      />
      <ContactSection />
    </>
  );
}
