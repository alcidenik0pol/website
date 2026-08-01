// Rich project pages rendered at /projects/[slug].
// slug        → jobapplier slug (URL + markdown filename in public/projects/).
// title       → used only for <head> metadata (the markdown also has its own H1).
// demoSlug    → website DemoData slug used for video lookup, or null.
// video       → local webm path (fallback when no DemoData match), or null.
// architecture→ /images/architectures/<name>.png, or null.
const projectsPageData = [
  {
    slug: "steinway-mcp",
    title: "Steinway & Sons: Factory MCP Server",
    demoSlug: "steinway-mcp",
    video: null,
    architecture: "/images/architectures/steinway.png",
  },
  {
    slug: "parkour-agent",
    title: "Reinforcement Learning Parkour Agent",
    demoSlug: "parkour-agent",
    video: null,
    architecture: "/images/architectures/parkour-agent.png",
  },
  {
    slug: "cyberpunk-rpg",
    title: "AI-Native 3D RPG (deusexdragon)",
    demoSlug: "cyberpunk-rpg",
    video: null,
    architecture: "/images/architectures/deusex.png",
  },
  {
    slug: "3d-raycasting-fps",
    title: "3D Raycasting FPS Engine (cube3d)",
    demoSlug: "3d-raycasting-fps",
    video: null,
    architecture: null,
  },
  {
    slug: "meta-ar-aria",
    title: "Meta Aria: AI Cloth Detection",
    demoSlug: "meta-ar-aria",
    video: null,
    architecture: "/images/architectures/meta-aria.png",
  },
  {
    slug: "4g-catalyzer-hackathon",
    title: "4G Catalyzer Hackathon: Synthetic Medical Ultrasound",
    demoSlug: "4g-catalyzer-hackathon",
    video: null,
    architecture: null,
  },
  {
    slug: "buyer-deal-platform",
    title: "Full-Stack M&A Intelligence Platform",
    demoSlug: null,
    video: "/videos/m-and-a.webm",
    architecture: null,
  },
  {
    slug: "kering-robot",
    title: "Kering Group Warehouse Robot",
    demoSlug: null,
    video: null,
    architecture: "/images/architectures/kering-robot.png",
  },
  {
    slug: "reddit-scraper-agentic-ai",
    title: "Reddit Scraper to Business Idea Generator",
    demoSlug: null,
    video: "/videos/reddit-demo.webm",
    architecture: "/images/architectures/reddit.png",
  },
  {
    slug: "yitu-hackathon",
    title: "Yitu Tech: SSD Object Detection on KITTI",
    demoSlug: null,
    video: null,
    architecture: null,
  },
];

export default projectsPageData;
