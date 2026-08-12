import type { MetadataRoute } from "next";

const siteUrl = "https://bluecloudai.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/solutions", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
