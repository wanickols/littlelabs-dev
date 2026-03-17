<template>
  <section class="w-full pt-20 pb-24 flex justify-center bg-base-200/40">
    <!-- Inner Container -->
    <div class="w-full max-w-6xl">
      <!-- Grid for structure -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text Column -->
        <div class="max-w-2xl">
          <h1 class="titlexl leading-tight max-w-[20ch]">
            Real-time systems, full-stack apps, and whatever the problem demands
          </h1>

          <p class="paragraph mt-6">
            I build across web, mobile, desktop, and real-time systems: I'll
            learn what I have to. I've shipped apps to the App Store and Play
            Store, built AI-powered tools, and I'm currently developing a
            multiplayer game in Rust with a Vue frontend.
            <br /><br />
            I focus less on stacks and more on learning quickly and making
            systems work.
          </p>

          <div class="mt-8 flex gap-4">
            <RouterLink to="/projects" class="btn btn-primary">
              View Projects
            </RouterLink>
            <RouterLink to="/about" class="btn btn-outline">
              Learn More
            </RouterLink>
          </div>
        </div>

        <!-- Visual / Empty Space (intentional) -->
        <div class="hidden md:block">
          <!-- You can later drop something here:
               - screenshot
               - animated canvas
               - subtle graphic -->
        </div>
      </div>
    </div>
  </section>
</template>
