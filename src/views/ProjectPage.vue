<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects";
import { defineAsyncComponent } from "vue";

const route = useRoute();
const slug = route.params.slug as string;
const project = projects.find((p) => p.slug === slug);

let PageComponent = null;
if (project?.content) {
  PageComponent = defineAsyncComponent(project.content);
}
</script>

<template>
  <div v-if="project" class="px-fluid text-base-content">
    <header>
      <h1 class="text-4xl font-bold mb-2">{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </header>
    <Suspense>
      <component :is="PageComponent" v-if="PageComponent" />
    </Suspense>
  </div>
  <div v-else>
    <h2>Something went wrong :#</h2>
  </div>
</template>
