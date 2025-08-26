import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    '#about',
    '#experiences',
    '#skills', 
    '#projects',
    '#certificates',
    '#educations'
  ];

  return [
    {
      url: "https://corneliusventi.dev",
      lastModified: new Date(),
    },
    ...sections.map(section => ({
      url: `https://corneliusventi.dev${section}`,
      lastModified: new Date(),
    }))
  ];
}
