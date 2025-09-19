import llmoodImg from "../img/ProjectThumbnails/llmood.png";
import webImg from "../img/ProjectThumbnails/website.png";
import aiBrickImg from "../img/ProjectThumbnails/BrickReader.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  category: string; // e.g. "app", "website", "game"
  liveLink?: string;
  sourceLink?: string;

  content?: () => Promise<any>;
};

export const projects: Project[] = [
  {
    slug: "ll-mood",
    title: "ll Mood",
    description: "A minimalist mood tracker with no-pressure design.",
    thumbnail: llmoodImg,
    techStack: ["Flutter", "Dart"],
    category: "apps",
    sourceLink: "https://github.com/wanickols/ll_mood",

    content: () => import("./projectPages/LlMoodPage.vue"),
  },
  {
    slug: "website",
    title: "Little Labs Website",
    description:
      "A personal site and app showcase for clients and experiments.",
    thumbnail: webImg,
    techStack: ["Vue", "Vite", "Tailwind"],
    category: "websites",
    sourceLink: "https://github.com/wanickols/littlelabs-dev",

    content: () => import("./projectPages/LLWebPage.vue"),
  },
  {
    slug: "ai-brickreader",
    title: "AI BrickReader",
    description:
      "Automated OCR system for reading alumni bricks from sidewalk images.",
    thumbnail: aiBrickImg,
    techStack: ["Python", "OpenCV", "PaddleOCR"],
    category: "apps",
    sourceLink: "https://github.com/wanickols/ai-brickreader",
    liveLink: "",

    content: () => import("./projectPages/AIBrickReaderPage.vue"),
  },
];
