<script setup lang="ts">
import ProjectSection from "@/components/sections/ProjectSection.vue";
</script>

<template>
<ProjectSection title="About the Project">
  <p>
    A desktop real-time communication prototype built with <strong>Tauri</strong>, 
    <strong>Go</strong>, <strong>Vue</strong>, and <strong>Rust</strong>. The project explored 
    video/audio streaming using <strong>PION</strong> (Opus for audio, H.264 for video) and integrated backend 
    functionality with frontend handles. Due to challenges with under-documented codecs, development pivoted 
    to a smaller chatroom project to strengthen networking and backend skills.
  </p>
  <p>
    This sequence demonstrates practical experience in real-time audio/video handling, 
    cross-language integration, concurrency, and backend architecture.
  </p>
</ProjectSection>

<ProjectSection title="Tech Stack">
  <ul class="list-disc list-inside leading-relaxed">
    <li><strong>Go</strong> — backend, connection pooling, concurrency</li>
    <li><strong>Rust</strong> — experimental translation layer</li>
    <li><strong>Tauri</strong> — desktop app framework</li>
    <li><strong>Vue</strong> — frontend integration</li>
    <li><strong>PION</strong> — real-time video/audio streaming (Opus, H.264)</li>
  </ul>
</ProjectSection>

<ProjectSection title="How It Works">
  <p>
    The backend handles real-time connections and streams audio/video using PION. 
    Frontend handles connect via Tauri bindings to manage UI and real-time interactions. 
    The smaller chatroom project implements connection pooling and basic messaging as a foundation 
    for real-time communication experiments.
  </p>
</ProjectSection>
</template>   