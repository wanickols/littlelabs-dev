<script setup lang="ts">
import ProjectGallery from "@/components/projects/ProjectGallery.vue";

import { ref, computed } from "vue";
import { projects } from "@/assets/data/projects";
import ToggleBar from "@/components/ui/menus/ToggleBar.vue";

const allCategories = ["apps", "websites", "desktop"];
const selectedCategories = ref<string[]>([]);

const filteredCategories = computed(() => {
  return selectedCategories.value.length
    ? selectedCategories.value
    : allCategories;
});
</script>

<template>
  <div class="text-center p-6">
    <h1 class="titlexl">Projects</h1>

    <ToggleBar v-model="selectedCategories" :categories="allCategories" />
    <ProjectGallery :projects="projects" :categories="filteredCategories" />
  </div>
</template>
