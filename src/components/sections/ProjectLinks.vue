<script setup lang="ts">
defineProps<{
  sourceLink?: string;
  liveLink?: string;
}>();
</script>

<template>
  <section class="flex gap-4 mt-4">
    <a
      v-if="sourceLink"
      :href="sourceLink"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
    >
      View Source
    </a>
    <a
      v-if="liveLink"
      :href="liveLink"
      target="_blank"
      rel="noopener noreferrer"
      class="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
    >
      Live Demo
    </a>
    <a v-else-if="liveLink == null"> </a>
    <a
      v-else
      href="#"
      class="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
    >
      Live Demo (Coming Soon)</a
    >
  </section>
</template>
