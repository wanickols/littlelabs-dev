<script setup lang="ts">
import { themeChange } from "theme-change";

const footLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
];
themeChange(false);
</script>

<template>
  <footer class="footer p-4 bg-base-200 text-base-content text-sm">
    <div
      class="w-full flex flex-col md:flex-row justify-between items-center gap-2"
    >
      <div>&copy; 2025 Little Labs</div>
      <ul>
        <router-link
          v-for="link in footLinks"
          :key="link.name"
          :to="link.href"
          class="btn btn-ghost px-2"
        >
          {{ link.name }}
        </router-link>
      </ul>
    </div>
  </footer>
</template>
