import projectsPageData from "./ProjectsPageData";

export default function engineeringHref(slug) {
  return projectsPageData.some((p) => p.slug === slug)
    ? `/projects/${slug}`
    : `/demo/${slug}`;
}
