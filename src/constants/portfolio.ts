export const HERO_IMAGES = [
  { src: "/characters/orange.png", bg: "#D9856D" },
  { src: "/characters/green.png", bg: "#8FA183" },
  { src: "/characters/pink.png", bg: "#B7A5C8" },
  { src: "/characters/blue.png", bg: "#8CA6B7" },
] as const;

export const HERO_PERSONAS = [
  {
    label: "BUILDER MODE",
    ghost: "BUILD",
    copy: "I turn ambitious ideas into focused products, reliable systems, and software people can actually use.",
  },
  {
    label: "AGENT MODE",
    ghost: "AGENTS",
    copy: "I build AI agents, MCP servers, infrastructure, and integrations that keep working beyond the demo.",
  },
  {
    label: "PRODUCT MODE",
    ghost: "CRAFT",
    copy: "I make complex technology feel direct, useful, and unusually polished.",
  },
  {
    label: "SHIP MODE",
    ghost: "SCALE",
    copy: "I work from first prototype to production, connecting product thinking with full stack engineering.",
  },
] as const;

export const HERO_ROLE_CLASSES = {
  center:
    "left-1/2 bottom-0 z-20 h-[92%] opacity-100 max-sm:bottom-[22%] max-sm:h-[60%]",
  left: "left-[30%] bottom-[12%] z-10 h-[28%] opacity-85 blur-[2px] max-sm:left-[20%] max-sm:bottom-[32%] max-sm:h-[16%]",
  right:
    "left-[70%] bottom-[12%] z-10 h-[28%] opacity-85 blur-[2px] max-sm:left-[80%] max-sm:bottom-[32%] max-sm:h-[16%]",
  back: "left-1/2 bottom-[12%] z-5 h-[22%] blur-[4px] max-sm:bottom-[32%] max-sm:h-[13%]",
} as const;

export const TRACE_ENTRIES = [
  { name: "account.resolve", duration: 142, status: "SUCCESS" },
  { name: "campaign.fetch", duration: 386, status: "SUCCESS" },
  { name: "creative.generate", duration: 842, status: "WARNING" },
  { name: "campaign.publish", duration: 303, status: "FAILED" },
] as const;

export const BUILD_LOG = [
  { year: "2026", name: "Zyou marketing SDK", category: "Building" },
  { year: "2026", name: "SecureOps AI", category: "Hackathon" },
  { year: "2026", name: "Contract Guard", category: "Generative UI" },
  { year: "2023", name: "ISRO Disaster Dashboard", category: "GIS · Routing" },
] as const;
