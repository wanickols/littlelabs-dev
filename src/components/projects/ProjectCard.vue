<script setup lang="ts">
import type { Project } from "@/assets/data/projects";
import { RouterLink } from "vue-router";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="rounded-2xl shadow-md bg-base-100 overflow-hidden flex flex-col hover:scale-[1.04] transition-transform"
  >
    <img
      :src="project.thumbnail"
      alt="project thumbnail"
      class="h-48 w-full object-cover"
    />
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="cardTitle text-primary mb-2">
          {{ project.title }}
        </h3>
        <p class="paragraph text-primary">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="tech in project.techStack"
            :key="tech"
            class="px-3 py-2 text-xs rounded-full bg-neutral bg-opacity-90 text-white"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
