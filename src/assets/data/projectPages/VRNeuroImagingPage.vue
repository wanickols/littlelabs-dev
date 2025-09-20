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
    <p class="leading-relaxed mb-4">
      Developed a two-part system for interactive DICOM neuroimaging
      visualization. Built a QT desktop application for loading and
      preprocessing images, and a Unity VR application for exploring fully
      manipulatable 3D images on a Meta Quest 3.
    </p>
    <p class="leading-relaxed mb-4">
      The system enables researchers to examine complex neuroimaging data in a
      virtual environment, providing interactive 3D visualization beyond
      standard 2D viewers. The workflow runs on any machine with a Meta Quest 3
      connected.
    </p>
  </ProjectSection>

  <ProjectSection title="Tech Stack">
    <ul class="list-disc list-inside leading-relaxed">
      <li><strong>C++</strong> — QT desktop application</li>
      <li><strong>Unity & C#</strong> — VR visualization</li>
      <li><strong>DICOM</strong> — medical image format handling</li>
      <li><strong>Meta Quest 3</strong> — VR hardware platform</li>
      <li>
        <strong>Cross-platform workflow integration</strong> — desktop to VR
      </li>
    </ul>
  </ProjectSection>

  <ProjectSection title="How It Works">
    <p class="leading-relaxed mb-4">
      The system consists of two connected applications. First, the QT desktop
      app is used to load and preprocess DICOM images. Once prepared, the images
      are loaded into the Unity VR application, allowing interactive 3D
      exploration on a Meta Quest 3 headset.
    </p>
    <p class="leading-relaxed mb-4">
      The video below shows a short 7-second demonstration of the result in
      action. For the full 4-minute demo, visit the
      <a
        href="https://eac.ualr.edu/projects/epscor-dart-wp/epscor-dart-neuroimaging/"
        target="_blank"
        class="text-primary underline"
      >
        official showcase page </a
      >.
    </p>

    <video
      src="@/assets/img/projects/nueroimaging/NueroGif.mp4"
      autoplay
      loop
      muted
      playsinline
      class="rounded-lg shadow object-contain w-full max-w-lg mx-auto"
    >
      Your browser does not support the video tag.
    </video>
  </ProjectSection>
</template>
