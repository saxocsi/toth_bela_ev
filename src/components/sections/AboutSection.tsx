import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";

const AboutSection = () => {
  return (
    <SectionContainer className="pb-16">
      <div className="surface-readable rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-readable-soft">
          Rólunk – {siteConfig.company.name}
        </h2>

        <p className="mt-5 text-sm text-neutral-200 leading-relaxed max-w-3xl">
          {siteConfig.company.experienceLine}. Fő célunk a tartós, esztétikus és
          megbízható kivitelezés. Budapest és környékén vállalunk burkolást,
          kőműves munkákat, valamint generál kivitelezést.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-item rounded-2xl p-6">
            <div className="font-semibold">Munkastílus / alapelvek</div>
            <ul className="mt-3 text-sm text-neutral-200 leading-relaxed space-y-2">
              <li>• Pontosság és tiszta munkavégzés</li>
              <li>• Átlátható egyeztetés és ajánlat</li>
              <li>• Minőségi anyagok és tartós megoldások</li>
              <li>• Rugalmas, profi csapat</li>
            </ul>
          </div>

          <div className="surface-item rounded-2xl p-6">
            <div className="font-semibold">Garancia / számla</div>
            <p className="mt-3 text-sm text-neutral-200 leading-relaxed">
              A kivitelezésre garanciát vállalunk, a részleteket az ajánlatban
              rögzítjük. Számlázás igény szerint megoldható – megbeszélés
              alapján.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
