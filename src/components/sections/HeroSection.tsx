import { siteConfig } from "@/config/siteConfig";
import PrimaryButton from "@/components/ui/PrimaryButton";

const HeroSection = () => {
  return (
    <section className="py-32 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Kőműves és burkoló Budapest területén
      </h1>
      <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
        {siteConfig.company.experienceLine}. Generál kivitelezés Budapest és
        környéke.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <PrimaryButton href="/contact">Árajánlat kérése</PrimaryButton>
        <PrimaryButton
          href={`tel:${siteConfig.company.phone}`}
          variant="secondary"
        >
          Hívás
        </PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;
