<!-- components/ThemeButton.vue -->
<script setup lang="ts">
defineProps<{
  theme: string;
}>();
</script>

<template>
  <li>
    <button
      class="gap-3 px-2"
      :data-set-theme="theme"
      data-act-class="[&_svg]:visible"
    >
      <!-- Preview Swatch -->
      <div
        :data-theme="theme"
        class="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
      >
        <div class="bg-base-content size-1 rounded-full"></div>
        <div class="bg-primary size-1 rounded-full"></div>
        <div class="bg-secondary size-1 rounded-full"></div>
        <div class="bg-accent size-1 rounded-full"></div>
      </div>

      <!-- Label -->
      <div class="w-32 truncate">{{ theme }}</div>

      <!-- Checkmark -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="invisible h-3 w-3 shrink-0"
      >
        <path
          d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
        />
      </svg>
    </button>
  </li>
</template>
