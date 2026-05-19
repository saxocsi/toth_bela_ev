import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import CallToActionSection from "../components/sections/CallToActionSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import ReferencesPreviewSection from "../components/sections/ReferencesPreviewSection";
import ServicesPreviewSection from "../components/sections/ServicesPreviewSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd("/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesPreviewSection />
      <WhyChooseUsSection />
      <ReferencesPreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
