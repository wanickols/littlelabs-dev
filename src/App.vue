<script setup>
import { onMounted } from "vue";
import { themeChange } from "theme-change";
import Navbar from "./components/ui/Navbar.vue";
import Footer from "./components/ui/Footer.vue";
import PrivacyView from "./pages/PrivacyView.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <!-- This fills the vertical space between nav and footer -->
    <main class="flex-grow flex items-center justify-center">
      <PrivacyView />
    </main>

    <Footer />
  </div>
</template>
