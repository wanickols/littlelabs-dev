<script setup lang="ts">
import HamburgerMenu from "@components/ui/menus/HamburgerMenu.vue";

import { themeChange } from "theme-change";
import ThemeDropdown from "./ThemeDropdown.vue";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];
themeChange(false);
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <HamburgerMenu :links="navLinks" />
      <router-link to="/" class="btn btn-ghost text-xl"
        >Little Labs</router-link
      >
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.href"
          class="btn btn-ghost px-2"
        >
          {{ link.name }}
        </router-link>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeDropdown />
    </div>
  </div>
</template>
