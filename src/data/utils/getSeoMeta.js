// src/utils/getSeoMeta.js
import seoData from "../data/seo-meta.json";

export const getSeoMeta = (currentUrl) => {
  const pageMeta = seoData.pages.find((page) => page.url === currentUrl);
  if (!pageMeta) return null;
 

  return {
    title: pageMeta.meta.title,
    description: pageMeta.meta.description,
    keywords: pageMeta.meta.keywords,
    canonical: pageMeta.canonical,
    robots: pageMeta.robots,
    og: pageMeta.openGraph,
    twitter: pageMeta.twitterCard,
  };
};
