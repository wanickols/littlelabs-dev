<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";

const route = useRoute();
const slug = route.params.slug as string;

// find the matching project by slug
const project = projects.find((p) => p.slug === slug);
</script>

<template>
  <div v-if="project">
    <!-- About Section -->
    <ProjectSection title="About the Website">
      <p class="leading-relaxed">
        The Little Labs website is a personal portfolio and project showcase. It
        demonstrates both app projects and web experiments, and serves as a
        platform to highlight design, development, and technical skills.
      </p>
    </ProjectSection>

    <!-- Tech Stack -->
    <ProjectSection title="Tech Stack">
      <ul class="list-disc list-inside space-y-1">
        <li>Vue 3 + Vite for fast reactive UI</li>
        <li>TypeScript for type safety</li>
        <li>Tailwind CSS for styling</li>
        <li>GitHub Pages deployment</li>
      </ul>
    </ProjectSection>

    <!-- Design Philosophy -->
    <ProjectSection title="Design Philosophy">
      <p class="leading-relaxed">
        The site emphasizes clarity and simplicity, with a modular approach for
        reusable components. The goal is to make project content easy to browse
        while keeping the interface clean and minimal.
      </p>
    </ProjectSection>
  </div>

  <div v-else>
    <h2>Something went wrong :#</h2>
  </div>
</template>
