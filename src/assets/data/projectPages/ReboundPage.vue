<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";

const route = useRoute();
const slug = route.params.slug as string;

// find the matching project by slug
const project = projects.find((p) => p.slug === slug);
</script>

<template>
  <ProjectSection title="About the Project">
    <div class="flex flex-col md:flex-row items-start">
      <!-- Text block -->
      <div class="flex-1">
        <p class="leading-relaxed mb-4">
          Rebound is a top-down multiplayer arcade game built with a Rust
          backend and Vue.js frontend using Tauri. Players can compete in
          fast-paced matches with full LAN multiplayer support and controller
          input.
        </p>
      </div>

      <!-- Character idle GIF -->
      <div class="flex-shrink-0">
        <img
          src="@/assets/img/projects/rebound/mascot.gif"
          alt="Rebound Character Idle"
          class="rounded-lg w-20 h-20"
        />
      </div>
    </div>
    <p class="leading-relaxed mb-4">
      The game implements real-time physics for smooth, responsive gameplay.
      Matches are fully playable with scoring, replay, and game setup
      functionality. Currently on hiatus, with future polish planned including
      particle effects, sound, and a game-over screen.
    </p>
  </ProjectSection>

  <ProjectSection title="Tech Stack">
    <ul class="list-disc list-inside leading-relaxed">
      <li>Rust – backend logic and real-time physics</li>
      <li>Vue.js – frontend UI and game interface</li>
      <li>Tauri – cross-platform desktop app framework</li>
      <li>WebSockets / UDP – LAN multiplayer networking</li>
      <li>Controller support – full input handling</li>
    </ul>
  </ProjectSection>

  <ProjectSection title="How It Works">
    <p class="leading-relaxed mb-4">
      The game runs as a Tauri desktop app. Players can host or join LAN
      matches, control their characters with keyboard or controllers, and see
      physics-based interactions in real-time. Gameplay currently includes
      scoring and replay functionality.
    </p>
    <!-- Optional: Embed video or GIF here -->
    <video controls class="w-full rounded-lg mt-4">
      <source
        src="@/assets/img/projects/rebound/ReboundDemo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </ProjectSection>
</template>
