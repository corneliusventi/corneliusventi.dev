import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://corneliusventi.dev",
      lastModified: new Date(),
    },
  ];
}
