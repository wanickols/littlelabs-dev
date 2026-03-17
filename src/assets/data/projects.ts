import llmoodImg from "../img/ProjectThumbnails/llmood.png";
import libreImg from "../img/ProjectThumbnails/libretexts.png";
import webImg from "../img/ProjectThumbnails/website.png";
import aiBrickImg from "../img/ProjectThumbnails/BrickReader.png";
import nueroImg from "../img/ProjectThumbnails/NeuroDemo.png";

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
    slug: "libretexts-adapt-go",
    title: "LibreTexts Adapt Go",
    description:
      "Mobile companion app for classroom engagement, featuring live polling, assignments, and quiz access integrated with the LibreTexts platform.",
    thumbnail: libreImg, // swap with your actual import
    techStack: ["Flutter", "Dart", "REST API", "SSO"],
    category: "apps",
    sourceLink: "",

    content: () => import("./projectPages/LibreTextsAdaptGoPage.vue"),
  },
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
    slug: "ll-website",
    title: "Little Labs Website",
    description:
      "A personal site and app showcase for clients and experiments.",
    thumbnail: webImg,
    techStack: ["Vue", "Vite", "Tailwind"],
    category: "websites",
    sourceLink: "https://github.com/wanickols/littlelabs-dev",
    liveLink: "https://littlelabs.dev",
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

    content: () => import("./projectPages/AIBrickReaderPage.vue"),
  },
  {
    slug: "vr-neuroimaging",
    title: "VR NeuroImaging",
    description:
      "An interactive solution for visualizing and exploring DICOM images.",
    thumbnail: nueroImg,
    techStack: ["Unity", "C#", "Qt", "C++"],
    category: "desktop",

    content: () => import("./projectPages/VRNeuroImagingPage.vue"),
  },
];
