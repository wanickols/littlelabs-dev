import llmoodImg from "../img/ProjectThumbnails/llmood.png";
import webImg from "../img/ProjectThumbnails/website.png";

export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  category: string; // e.g. "app", "website", "game"
  liveLink?: string;
  sourceLink?: string;
};

export const projects: Project[] = [
  {
    title: "ll Mood",
    description: "A minimalist mood tracker with no-pressure design.",
    thumbnail: llmoodImg,
    techStack: ["Flutter", "Dart"],
    category: "apps",
    sourceLink: "https://github.com/wanickols/ll_mood",
  },
  {
    title: "Little Labs Website",
    description:
      "A personal site and app showcase for clients and experiments.",
    thumbnail: webImg,
    techStack: ["Vue", "Vite", "Tailwind"],
    category: "websites",
    sourceLink: "https://github.com/wanickols/littlelabs-dev",
  },
];
