<script setup>
import Navbar from "./components/ui/Navbar.vue";
import Footer from "./components/ui/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <!-- This fills the vertical space between nav and footer -->
    <main class="flex-grow flex items-center justify-center">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
