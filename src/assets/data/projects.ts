import llmoodImg from "../img/ProjectThumbnails/llmood.png";
import libreImg from "../img/ProjectThumbnails/libretexts.png";
import webImg from "../img/ProjectThumbnails/website.png";
import aiBrickImg from "../img/ProjectThumbnails/BrickReader.png";
import nueroImg from "../img/ProjectThumbnails/NeuroDemo.png";
import echoChatImg from "../img/ProjectThumbnails/NeuroDemo.png";
import echoStreamImg from "../img/ProjectThumbnails/NeuroDemo.png";
import reboundImg from "../img/ProjectThumbnails/ReboundTitle.png";
import molImg from "../img/ProjectThumbnails/molecules.png";

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
    slug: "rebound",
    title: "Rebound",
    description:
      "A top-down multiplayer arcade game combining real-time physics and fast-paced gameplay. LAN multiplayer, and full controller support. Currently on hiatus.",
    thumbnail: reboundImg, // replace with your actual image import
    techStack: ["Rust", "Vue.js", "Tauri", "WebSockets", "UDP Networking"],
    category: "desktop",

    content: () => import("./projectPages/ReboundPage.vue"),
  },
  {
    slug: "molecules",
    title: "Molecules",
    description:
      "A 3D molecule viewer and editor built with Unity for multiple platforms, featuring chemical structure visualization and editing capabilities.",
    thumbnail: molImg, // replace with your actual image import
    techStack: ["Unity", "C#", "OpenGL"],
    category: "websites",

    content: () => import("./projectPages/MoleculesPage.vue"),
  },
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
    category: "desktop",
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
{
  slug: "echostream",
  title: "EchoStream: Real-Time Video/Audio Prototype",
  description:
    "Desktop prototype exploring real-time video/audio streaming using Tauri, Go, Vue, and Rust. Implemented backend streaming with PION (Opus for audio, H.264 for video) and frontend integration handles. Paused after challenges with under-documented codecs.",
  thumbnail: echoStreamImg,
  techStack: ["Go", "Rust", "Tauri", "Vue", "PION", "Opus", "H.264"],
  category: "desktop",
  sourceLink: "", // optional if private
  content: () => import("./projectPages/EchoStreamPage.vue"),
},
{
  slug: "echochat",
  title: "EchoChat: Real-Time Messaging",
  description:
    "Mini chatroom project spun off from EchoStream to strengthen backend and networking skills in Go. Implemented connection pooling, basic messaging, and frontend integration, laying a foundation for real-time communication systems.",
  thumbnail: echoChatImg,
  techStack: ["Go", "Tauri", "Vue", "Networking", "Concurrency"],
  category: "desktop",
  sourceLink: "", // optional
  content: () => import("./projectPages/EchoChatPage.vue"),
}

];
