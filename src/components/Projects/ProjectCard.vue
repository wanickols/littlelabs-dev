<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
}>();
</script>

<template>
  <div
    class="rounded-2xl shadow-md bg-base-100 overflow-hidden flex flex-col hover:scale-[1.01] transition-transform"
  >
    <img
      :src="thumbnail"
      alt="project thumbnail"
      class="h-40 w-full object-cover"
    />
    <div class="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 class="cardTitle text-primary mb-2">
          {{ title }}
        </h3>
        <p class="paragraph text-primary">
          {{ description }}
        </p>
        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-2 py-1 text-xs rounded-full bg-neutral bg-opacity-90 text-white"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="flex gap-4 mt-4">
        <a
          v-if="liveLink"
          :href="liveLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:underline"
        >
          Live
        </a>
        <a
          v-if="sourceLink"
          :href="sourceLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary hover:underline"
        >
          Code
        </a>
      </div>
    </div>
  </div>
</template>
