import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://corneliusventi.dev",
      lastModified: new Date(),
    },
    {
      url: "https://corneliusventi.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://corneliusventi.dev/skills",
      lastModified: new Date(),
    },
    {
      url: "https://corneliusventi.dev/about",
      lastModified: new Date(),
    },
  ];
}
