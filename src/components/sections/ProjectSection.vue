<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="mb-6">
    <h2 class="text-2xl font-semibold mb-2">{{ title }}</h2>
    <div>
      <slot />
    </div>
  </section>
</template>
