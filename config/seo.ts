import { siteConfig } from "@/config/siteConfig";
import { absoluteUrl } from "@/lib/url";

export const buildPageSeo = (params: {
  title: string;
  description: string;
  path: string;
}) => {
  const { title, description, path } = params;

  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(siteConfig.site.defaultOgImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
    other: {
      // “TikTok card” nincs hivatalos standard, de kérted – adjuk hozzá (nem árt, max ignorálják)
      "tiktok:card": "summary_large_image",
      "tiktok:title": title,
      "tiktok:description": description,
      "tiktok:image": ogImage,
    },
  };
};
