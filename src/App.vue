<script setup>
import { themeChange } from "theme-change";

themeChange(true);
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-base-100 transition-colors duration-300"
  >
    <h1 class="text-5xl mb-8">Little Labs</h1>

    <!-- Theme toggle button -->
    <button data-set-theme="cupcake" class="btn btn-primary mb-4">
      Light Theme
    </button>

    <button data-set-theme="dark" class="btn btn-secondary">Dark Theme</button>
  </div>
</template>
