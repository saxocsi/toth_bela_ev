import { siteConfig } from "@/config/siteConfig";
import { absoluteUrl } from "@/lib/url";

export const buildLocalBusinessJsonLd = (path: string) => {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor"],
    name: siteConfig.company.name,
    url,
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    areaServed: siteConfig.company.area,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Budapest",
      addressCountry: "HU",
    },
    sameAs: [],
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.shortDescription,
    })),
  };
};
