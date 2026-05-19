import { siteConfig } from "@/config/siteConfig";

export const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.startsWith("http")) return envUrl;
  return siteConfig.site.urlFallback;
};

export const absoluteUrl = (path: string) => {
  const base = getSiteUrl().replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
};
