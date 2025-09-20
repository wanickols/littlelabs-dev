<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";
import ProjectLinks from "@/components/sections/ProjectLinks.vue";

const route = useRoute();
const slug = route.params.slug as string;

// find the matching project by slug
const project = projects.find((p) => p.slug === slug);
</script>

<template>
  <div>
    <!-- About Section -->
    <ProjectSection title="About This Site">
      <p class="leading-relaxed mb-4">
        This portfolio site is a project in itself — built with Vue, TypeScript,
        and hosted on Netlify. My goal was to create a lightweight, responsive,
        and easily extendable platform to showcase my apps and other projects.
      </p>
      <p class="leading-relaxed mb-4">
        Beyond being a portfolio, this site also serves as a demonstration of
        web development capabilities. It’s built from a reusable template
        intended for client projects, showing how the design can scale and adapt
        for additional sites without starting from scratch.
      </p>
    </ProjectSection>

    <ProjectSection title="Dive Deeper">
      <p>Explore the full source code for this site on GitHub.</p>
      <ProjectLinks :sourceLink="project.sourceLink" :liveLink="null" />
    </ProjectSection>
  </div>
</template>
