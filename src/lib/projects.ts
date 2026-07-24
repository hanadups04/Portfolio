// import project1 from "../assets/project-1.jpg";
// import project2 from "../assets/project-2.jpg";
import Editorially_Logo from "../assets/Editorially_Logo.png";
import Editorially1 from "../assets/Editorially1.png";
import Editorially2 from "../assets/Editorially2.png";
import Editorially3 from "../assets/Editorially3.png";
import Editorially4 from "../assets/Editorially4.png";
import Editorially5 from "../assets/Editorially5.png";
import Editorially6 from "../assets/Editorially6.png";
import Arpeps_Logo from "../assets/Arpeps_Logo.png";
import Arpeps1 from "../assets/Arpeps1.png";
import Arpeps2 from "../assets/Arpeps2.png";
import Arpeps3 from "../assets/Arpeps3.png";
import Arpeps4 from "../assets/Arpeps4.png";


export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  short: string;
  cover: string;
  preview: { src: string; caption: string }[];
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
    slug: "editorially",
    title: "Editorially",
    category: "CMS · Publication",
    year: "2025-2026",
    short: "A Content Management Platform for The Nuntium, a student publication who soley rely on social media as their main platform for publication. Streamlining their editorial workflow and providing a centralized platform with reader side for managing their project and article contents.",
    cover: Editorially_Logo,
    preview: [
      { src: Editorially1, caption: "Reader Homepage" },
      { src: Editorially2, caption: "How we Deliver our Stories" },
      { src: Editorially3, caption: "Section Page" },
    ],
    problem:
      "Student Publications were relying on fragmented tools to create their articles, and only Social Media to publish their works",
    solution:
      "Editorially centralizes the article creation lifecycle in one system, improving efficiency",
    role: "Lead full-stack engineer — owned data layer, query API, and dashboard UI. Worked with one designer and one backend engineer.",
    challenges: [
      "Student Publications relying on Social Medial platforms to deliver their content",
      "Relying on fragmented tools and process just to track and manage their content",
      "No way to easily manage, update, or archive past posts",
    ],
    tech: ["React", "Javascript", "CSS3", "Supabase", "Firebase Hosting", "Cloudflare"],
    github: "https://github.com/hanadups04/Editorially/blob/main/README.md",
    live: "https://editorially.app/readers",
    demoUrl: "https://editorially.app/readers",
    screenshots: [
      { src: Editorially5, caption: "Article View" },
      { src: Editorially4, caption: "Project Details View" },
      { src: Editorially6, caption: "Content Management" },
    ],
  },
  {
    slug: "arpeps",
    title: "Arpeps",
    category: "AI TOOL",
    year: "2026",
    short: "A tool for students to analyze and visualize their research concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper.",
    cover: Arpeps_Logo,
    preview: [
      { src: Arpeps1, caption: "Dashboard" },
      { src: Arpeps2, caption: "Paper Analysis" },
      { src: Arpeps3, caption: "Paper View" },
    ],
    problem:
      "Students in Philippines needing to always print out copies of their paper for progress checking",
    solution:
      "A system where Professors and Students can analyze and correct the softcopy of their Research Papers before being printed, reducing unnecessary waste of paper just for a one time checking",
    role: "Full-stack engineer - Planned the architecture of the system and developed the frontend following NextJs best practices",
    challenges: [
      "Relatively simple system, main challenge was learning how to use NextJs and TailwindCSS on a new project",
    ],
    tech: ["Next.js", "Typescript", "Tailwind CSS", "Supabase", "OpenRouter"],
    github: "https://github.com",
    live: "https://example.com",
    demoUrl: "https://example.com",
    screenshots: [
      { src: Arpeps2, caption: "Paper Analysis" },
      { src: Arpeps3, caption: "Paper View" },
      { src: Arpeps4, caption: "Concept Graph Visualizer" },
    ],
  }
  // {
  //   slug: "SIS",
  //   title: "SIS",
  //   category: "AI TOOL",
  //   year: "2026",
  //   short: "A tool for students to analyze and visualize their research concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper.",
  //   cover: Arpeps_Logo,
  //   preview: [
  //     { src: Editorially1, caption: "Reader Homepage" },
  //     { src: Editorially2, caption: "Project Details View" },
  //     { src: Editorially3, caption: "Content Management" },
  //   ],
  //   problem:
  //     "Most run trackers feel like spreadsheets. Casual runners wanted motivation and narrative, not just split times and pace charts.",
  //   solution:
  //     "Designed an app where each week becomes an illustrated 'chapter'. Runs sync from HealthKit and the app procedurally renders an animated weekly recap.",
  //   role: "Solo developer and designer — shipped to TestFlight with 1,200 beta users.",
  //   challenges: [
  //     "Smooth procedural animation on lower-end Android devices.",
  //     "Background sync and battery cost.",
  //     "Designing an onboarding that didn't ask for everything up front.",
  //   ],
  //   tech: ["React", "Javascript", "CSS3", "Supabase", "Firebase Hosting"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   demoUrl: "https://example.com",
  //   screenshots: [
  //     { src: Arpeps2, caption: "Paper Analysis" },
  //     { src: Arpeps3, caption: "Paper View" },
  //     { src: Arpeps4, caption: "Concept Graph Visualizer" },
  //   ],
  // },
  // {
  //   slug: "buslink",
  //   title: "Buslink",
  //   category: "AI TOOL",
  //   year: "2026",
  //   short: "A tool for students to analyze and visualize their research concepts. It's goal is to help you see where the holes are in your paper, fix it, and produce an overall better paper.",
  //   cover: Arpeps_Logo,
  //   preview: [
  //     { src: Editorially1, caption: "Reader Homepage" },
  //     { src: Editorially2, caption: "Project Details View" },
  //     { src: Editorially3, caption: "Content Management" },
  //   ],
  //   problem:
  //     "Most run trackers feel like spreadsheets. Casual runners wanted motivation and narrative, not just split times and pace charts.",
  //   solution:
  //     "Designed an app where each week becomes an illustrated 'chapter'. Runs sync from HealthKit and the app procedurally renders an animated weekly recap.",
  //   role: "Solo developer and designer — shipped to TestFlight with 1,200 beta users.",
  //   challenges: [
  //     "Smooth procedural animation on lower-end Android devices.",
  //     "Background sync and battery cost.",
  //     "Designing an onboarding that didn't ask for everything up front.",
  //   ],
  //   tech: ["React", "Javascript", "CSS3", "Supabase", "Firebase Hosting"],
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   demoUrl: "https://example.com",
  //   screenshots: [
  //     { src: Arpeps2, caption: "Paper Analysis" },
  //     { src: Arpeps3, caption: "Paper View" },
  //     { src: Arpeps4, caption: "Concept Graph Visualizer" },
  //   ],
  // },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
