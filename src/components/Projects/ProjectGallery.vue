<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { computed } from "vue";
import type { Project } from "@/assets/data/projects";

const props = defineProps<{
  projects: Project[];
  categories?: string[];
}>();

const filteredProjects = computed(() =>
  // if no categories provided or empty, return all
  !props.categories || props.categories.length === 0
    ? props.projects
    : props.projects.filter((p) =>
        props.categories!.some(
          (cat) => cat.toLowerCase() === p.category.toLowerCase()
        )
      )
);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      v-for="(proj, index) in filteredProjects"
      :key="index"
      v-bind="proj"
    />
  </div>
</template>
