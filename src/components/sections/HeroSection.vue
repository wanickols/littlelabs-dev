<template>
  <section
    class="px-fluid py-20 flex flex-col items-center md:flex-row md:justify-between gap-12"
  >
    <!-- Text Column -->
    <div class="max-w-xl text-center md:text-left">
      <h1 class="titlexl">Small Tools. Real Purpose.</h1>
      <p class="paragraph mt-4">
        I make software that matters to me — simple apps and games that do what
        I hope they will. They may be small, they may not change the world, but
        they are built to last.
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
