import { siteConfig } from "@/config/siteConfig";
import SectionContainer from "@/components/ui/SectionContainer";
import Divider from "@/components/ui/Divider";
import PrimaryButton from "@/components/ui/PrimaryButton";

const ContactSection = () => {
  const mailtoHref = `mailto:${siteConfig.company.email}?subject=${encodeURIComponent(
    siteConfig.contact.offerEmailSubject,
  )}&body=${encodeURIComponent(siteConfig.contact.offerEmailBody)}`;

  return (
    <SectionContainer className="pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Kapcsolat</h2>
        <p className="mt-2 text-sm text-neutral-400">
          1 kattintás: telefon vagy email. Terület: {siteConfig.company.area}.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="font-semibold">Telefon</div>
            <a
              className="mt-3 block text-lg underline underline-offset-4 hover:text-white transition"
              href={`tel:${siteConfig.company.phone}`}
            >
              {siteConfig.company.phone}
            </a>
            <p className="mt-2 text-sm text-neutral-400">
              Gyors egyeztetéshez hívj nyugodtan.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="font-semibold">Email</div>
            <a
              className="mt-3 block text-lg underline underline-offset-4 hover:text-white break-all transition"
              href={`mailto:${siteConfig.company.email}`}
            >
              {siteConfig.company.email}
            </a>
            <p className="mt-2 text-sm text-neutral-400">
              Ajánlatkéréshez javasolt az előre kitöltött email.
            </p>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton href={`tel:${siteConfig.company.phone}`}>
            Hívás most
          </PrimaryButton>
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Előre kitöltött email
          </a>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Vállalási terület</h3>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {siteConfig.serviceAreaList.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-200"
              >
                <span aria-hidden="true">📍 </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
