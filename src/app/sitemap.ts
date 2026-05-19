import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/services", "/references", "/about", "/contact"];

  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
