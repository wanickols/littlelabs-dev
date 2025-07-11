<script setup lang="ts">
import HamburgerMenu from "./HamburgerMenu.vue";
import ThemeDropdown from "./ThemeDropdown.vue";
import { themeChange } from "theme-change";

const navLinks = [
  { name: "Home", href: "" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
themeChange(false);
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <HamburgerMenu :links="navLinks" />
      <a class="btn btn-ghost text-xl">Little Labs</a>
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeDropdown />
    </div>
  </div>
</template>
