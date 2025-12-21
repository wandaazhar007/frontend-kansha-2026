// app/sitemap.ts
import type { MetadataRoute } from "next";

function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://kanshamissouri.com"
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/menu", priority: 0.9 },
    { path: "/about", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.4 },
    { path: "/refund-policy", priority: 0.4 },
    { path: "/terms-conditions", priority: 0.4 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.path === "/" ? "weekly" : "monthly",
    priority: r.priority,
  }));
}