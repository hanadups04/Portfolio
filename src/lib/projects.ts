import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  short: string;
  cover: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  tech: string[];
  github?: string;
  live?: string;
  demoUrl?: string;
  screenshots: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "pulsegrid-analytics",
    title: "PulseGrid Analytics",
    category: "SaaS · Analytics",
    year: "2026",
    short: "Real-time product analytics dashboard with sub-second query performance.",
    cover: project1,
    problem:
      "Mid-stage startups were drowning in tooling cost and slow query times. Existing analytics platforms charged per-event and dashboards took 8–12s to load on cold cache.",
    solution:
      "Built a columnar event store with materialized rollups and a streaming ingest pipeline. Dashboards now render in under 600ms p95 even on 200M+ event datasets.",
    role: "Lead full-stack engineer — owned data layer, query API, and dashboard UI. Worked with one designer and one backend engineer.",
    challenges: [
      "Designing a query planner that reuses pre-aggregated rollups without sacrificing flexibility.",
      "Handling 40k events/sec ingest while keeping write costs predictable.",
      "Making dashboard composition feel instant despite remote queries.",
    ],
    tech: ["Next.js", "TypeScript", "ClickHouse", "Kafka", "tRPC", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    demoUrl: "https://example.com",
    screenshots: [
      { src: project1, caption: "Live dashboard overview" },
      { src: project1, caption: "Funnel composer" },
      { src: project1, caption: "Cohort retention grid" },
    ],
  },
  {
    slug: "stride-fitness",
    title: "Stride",
    category: "Mobile · Health",
    year: "2025",
    short: "A run tracking app that turns weekly mileage into a visual story.",
    cover: project2,
    problem:
      "Most run trackers feel like spreadsheets. Casual runners wanted motivation and narrative, not just split times and pace charts.",
    solution:
      "Designed an app where each week becomes an illustrated 'chapter'. Runs sync from HealthKit and the app procedurally renders an animated weekly recap.",
    role: "Solo developer and designer — shipped to TestFlight with 1,200 beta users.",
    challenges: [
      "Smooth procedural animation on lower-end Android devices.",
      "Background sync and battery cost.",
      "Designing an onboarding that didn't ask for everything up front.",
    ],
    tech: ["React Native", "Expo", "Reanimated", "Supabase", "HealthKit"],
    github: "https://github.com",
    live: "https://example.com",
    demoUrl: "https://example.com",
    screenshots: [
      { src: project2, caption: "Weekly recap screen" },
      { src: project2, caption: "Live run view" },
      { src: project2, caption: "Goal composer" },
    ],
  },
  {
    slug: "rosewire-chat",
    title: "Rosewire",
    category: "AI · Platform",
    year: "2025",
    short: "Self-hostable AI chat platform with first-class tool calling and audit trails.",
    cover: project3,
    problem:
      "Teams in regulated industries wanted ChatGPT-class UX without sending data to third parties — and existing self-hosted options felt like demos, not products.",
    solution:
      "Built a multi-tenant chat runtime with provider-agnostic tool calling, end-to-end audit logging, and per-workspace policy controls.",
    role: "Founding engineer — architected the runtime, built the React frontend, and shipped the first three production deployments.",
    challenges: [
      "Streaming tool calls reliably across model providers with very different APIs.",
      "Policy enforcement that didn't break the chat flow.",
      "Keeping the bundle small while supporting plugins.",
    ],
    tech: ["Remix", "Postgres", "Drizzle", "Bun", "OpenAI", "Anthropic"],
    github: "https://github.com",
    live: "https://example.com",
    demoUrl: "https://example.com",
    screenshots: [
      { src: project3, caption: "Conversation surface" },
      { src: project3, caption: "Tool-call inspector" },
      { src: project3, caption: "Workspace policies" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
