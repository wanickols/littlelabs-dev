<script setup lang="ts">
import { onMounted } from "vue";
import { themeChange } from "theme-change";
import ThemeButton from "./ThemeButton.vue";

onMounted(() => {
  themeChange(false);
});

const lightThemes = [
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "retro",
  "corporate",
  "valentine",
  "garden",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "cmyk",
  "autumn",
  "acid",
  "nord",
  "lemonade",
  "winter",
  "cyberpunk",
];

const darkThemes = [
  "dark",
  "synthwave",
  "aqua",

  "halloween",
  "forest",
  "black",
  "luxury",
  "dracula",
  "night",
  "coffee",
  "dim",
  "business",
  "sunset",
];
</script>

<!-- Taken from the Daisy UI Site. Lot's of love go check them out-->

<template>
  <div title="Change Theme" class="dropdown dropdown-end block">
    <div
      tabindex="0"
      role="button"
      class="btn group btn-sm gap-1.5 px-1.5 btn-ghost"
      aria-label="Change Theme"
    >
      <div
        class="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors"
      >
        <div class="bg-base-content size-1 rounded-full"></div>
        <div class="bg-primary size-1 rounded-full"></div>
        <div class="bg-secondary size-1 rounded-full"></div>
        <div class="bg-accent size-1 rounded-full"></div>
      </div>
      <svg
        width="12px"
        height="12px"
        class="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path
          d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
        ></path>
      </svg>
    </div>
    <div
      tabindex="0"
      class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border border-white/5 shadow-2xl outline-1 outline-black/5 mt-16"
    >
      <ul class="menu w-56">
        <li class="menu-title text-xs">Theme</li>
        <li class="menu-title">Light Themes</li>
        <ThemeButton v-for="theme in lightThemes" :key="theme" :theme="theme" />

        <li class="menu-title">Dark Themes</li>
        <ThemeButton v-for="theme in darkThemes" :key="theme" :theme="theme" />
      </ul>
    </div>
  </div>
</template>
