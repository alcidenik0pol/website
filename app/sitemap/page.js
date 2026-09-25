import fs from "fs";
import path from "path";
import Link from "next/link";
import ResearcherHeader from "@/app/components/ResearcherHeader";
import projectsPageData from "@/app/data/ProjectsPageData";
import projectsData from "@/app/data/ProjectsData";
import demoData from "@/app/data/DemoData";
import publicationsData from "@/app/data/PublicationsData";

export const metadata = {
  title: "Sitemap | Victor Tenneroni",
  description: "All pages and URLs on this site.",
};

// [slug] segment name (the parent folder) → list of { slug, title } it expands to.
// Demo titles come from joining DemoData with ProjectsData on slug,
// same as app/demo/[slug]/page.js does.
const dynamicData = {
  projects: projectsPageData.map((p) => ({ slug: p.slug, title: p.title })),
  demo: demoData.map((d) => ({
    slug: d.slug,
    title: projectsData.find((p) => p.slug === d.slug)?.title || d.slug,
  })),
  publications: publicationsData.map((p) => ({ slug: p.slug, title: p.title })),
};

const LABELS = {
  "": "Home",
  about: "About",
  demo: "Demo",
  engineering: "Engineering",
  investments: "Investments",
  projects: "Projects",
  publications: "Publications",
  sitemap: "Sitemap",
  startup: "Startup",
  stemopt: "STEM OPT",
};

function segmentLabel(segment) {
  if (LABELS[segment] !== undefined) return LABELS[segment];
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Recursively collect directories under app/ that contain a page.js.
function collectRouteDirs(dir) {
  let dirs = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      dirs = dirs.concat(collectRouteDirs(full));
    } else if (entry.name === "page.js") {
      dirs.push(dir);
    }
  }
  return dirs;
}

// Expand a dynamic route (/projects/[slug]) into concrete child URLs,
// or null when no data module is mapped for it.
function expandChildren(routePath) {
  const segments = routePath.slice(1).split("/");
  const dynamicIndexes = segments
    .map((s, i) => (s.startsWith("[") && s.endsWith("]") ? i : -1))
    .filter((i) => i !== -1);
  if (
    dynamicIndexes.length !== 1 ||
    dynamicIndexes[0] !== segments.length - 1
  ) {
    return null;
  }
  const items = dynamicData[segments[segments.length - 2]];
  if (!items) return null;
  const base = "/" + segments.slice(0, -1).join("/");
  return items.map((item) => ({
    path: `${base}/${item.slug}`,
    title: item.title,
  }));
}

// Discover every route, expand dynamic ones, and merge children under
// their static parent row when it exists (/demo/[slug] → /demo). A dynamic
// route without a static parent (/projects/[slug]) becomes a non-clickable
// row showing the URL pattern.
function getSitemap() {
  const appDir = path.join(process.cwd(), "app");
  const all = collectRouteDirs(appDir).map((dir) => {
    const rel = path.relative(appDir, dir).split(path.sep).join("/");
    return rel === "" ? "/" : "/" + rel;
  });
  const staticPaths = new Set(all.filter((p) => !p.includes("[")));

  const childrenByParent = {};
  const expansions = {};
  const mergedDynamic = new Set();
  for (const p of all) {
    if (!p.includes("[")) continue;
    expansions[p] = expandChildren(p);
    const parent = p.slice(0, p.lastIndexOf("/"));
    if (expansions[p] && staticPaths.has(parent)) {
      childrenByParent[parent] = expansions[p];
      mergedDynamic.add(p);
    }
  }

  const routes = all
    .filter((p) => !mergedDynamic.has(p))
    .map((p) => {
      const topSegment = p === "/" ? "" : p.slice(1).split("/")[0];
      const dynamic = p.includes("[");
      return {
        path: p,
        label: segmentLabel(topSegment),
        link: !dynamic,
        children: (
          dynamic ? expansions[p] : childrenByParent[p] || []
        ).sort((a, b) => a.path.localeCompare(b.path)),
      };
    });

  routes.sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });
  return routes;
}

export default function SitemapPage() {
  const routes = getSitemap();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ResearcherHeader />
      <main className="max-w-4xl mx-auto px-4 py-8 md:px-6">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">
            Sitemap
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All pages and URLs on this site.
          </p>
        </header>

        <section>
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Pages
          </h2>
          <ul className="space-y-3">
            {routes.map((route) => (
              <li key={route.path}>
                <div className="flex items-baseline justify-between gap-4">
                  {route.link ? (
                    <Link
                      href={route.path}
                      className="text-sm hover:underline underline-offset-4 transition-colors"
                    >
                      {route.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {route.label}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {route.path}
                  </span>
                </div>

                {route.children.length > 0 && (
                  <ul className="mt-1 ml-4 border-l border-border pl-4 space-y-1">
                    {route.children.map((child) => (
                      <li
                        key={child.path}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <Link
                          href={child.path}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.title}
                        </Link>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {child.path}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
