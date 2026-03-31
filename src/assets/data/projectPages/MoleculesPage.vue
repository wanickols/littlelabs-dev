<script setup lang="ts">
import ProjectSection from "@/components/sections/ProjectSection.vue";
</script>

<template>
  <section class="project">
    <!-- About the Project -->
    <ProjectSection title="About the Project">
      <p>
        Molecules is an interactive chemistry visualization tool that allows
        users to build, manipulate, and explore molecular structures in
        real-time. It features atom placement, automatic bonding, and basic
        stabilization logic, providing a hands-on experience with molecular
        modeling concepts.
      </p>
      <p>
        The project emphasizes a clean separation between rendering and data
        layers, allowing potential bonds to be visualized before committing them
        to the molecular model.
      </p>
    </ProjectSection>

    <!-- Tech Stack -->
    <ProjectSection title="Tech Stack">
      <p>
        • <strong>Unity</strong> for 3D rendering and WebGL export<br />
        • <strong>C#</strong> for backend molecule data structures and game
        logic<br />
        • <strong>WebGL</strong> for browser deployment<br />
        • Optional: <strong>Netlify</strong> for hosting the demo
      </p>
    </ProjectSection>

    <!-- How It Works -->
    <ProjectSection title="How It Works">
      <p>
        Users can add atoms interactively, which generates visual “potential”
        bonds in the renderer. Clicking stabilize commits these bonds to the
        underlying molecule data. The system calculates neighbor relationships
        and bond orders, ensuring chemical plausibility.
      </p>
      <p>
        Molecules can be built dynamically, visualized in 3D, and exported or
        further processed for research or educational purposes.
      </p>
    </ProjectSection>

    <!-- Demo Link -->
    <ProjectSection title="Demo">
      <p>
        You can explore the live Molecules demo
        <a
          href="/demos/molecules/index.html"
          target="_blank"
          class="text-blue-600 underline"
        >
          here </a
        >.
      </p>
    </ProjectSection>
  </section>
</template>

<style scoped>
.project p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
