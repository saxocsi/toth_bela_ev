import { buildLocalBusinessJsonLd } from "@/lib/sonLd";
import WorkflowScrollSection from "@/components/sections/WorkflowScrollSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ReferencesPreviewSection from "@/components/sections/ReferencesPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd("/");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkflowScrollSection />
      <div className="relative z-10 -mt-[55vh]">
        <WhyChooseUsSection />
      </div>
      <ReferencesPreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
