<template>
  <section
    class="px-fluid py-20 flex flex-col items-center md:flex-row md:justify-between gap-12"
  >
    <!-- Text Column -->
    <div class="max-w-xl text-center md:text-left">
      <h1 class="titlexl">Small Tools. Clear Purpose.</h1>
      <p class="paragraph mt-4">
        I build modular, thoughtful software — from quiet utility apps to games
        with a heartbeat. Every part has a purpose. Every project is made to
        last.
      </p>
      <div class="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
        <RouterLink to="/projects" class="btn btn-primary"
          >View Projects</RouterLink
        >
        <RouterLink to="/about" class="btn btn-outline">Learn More</RouterLink>
      </div>
    </div>
  </section>
</template>
