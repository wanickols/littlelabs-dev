<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import llmoodImg from "@/assets/img/ProjectThumbnails/llmood.png";
import webImg from "@/assets/img/ProjectThumbnails/website.png";
const projects = [
  {
    title: "ll Mood",
    description: "A minimalist mood tracker with no-pressure design.",
    thumbnail: llmoodImg,
    techStack: ["Flutter", "Dart"],
    liveLink: "",
    sourceLink: "https://github.com/wanickols/ll_mood",
  },
  {
    title: "Little Labs Website",
    description:
      "A personal site and app showcase for clients and experiments.",
    thumbnail: webImg,
    techStack: ["Vue", "Vite", "Tailwind"],
    sourceLink: "https://github.com/wanickols/littlelabs-dev",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard v-for="(proj, index) in projects" :key="index" v-bind="proj" />
  </div>
</template>
