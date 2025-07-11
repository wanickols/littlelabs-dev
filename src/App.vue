<script setup>
import { onMounted } from "vue";
import { themeChange } from "theme-change";
import Navbar from "./components/ui/Navbar.vue";
import Footer from "./components/ui/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <!-- This fills the vertical space between nav and footer -->
    <main class="flex-grow flex items-center justify-center">
      <div class="text-center p-6">
        <h1 class="text-3xl font-bold mb-4">🚧 Site Under Construction</h1>
        <p class="text-base text-base-content">
          This site is currently in progress. Come back soon!
        </p>
      </div>
    </main>

    <Footer />
  </div>
</template>
