<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";
import ProjectLinks from "@/components/sections/ProjectLinks.vue";
import screen1 from "@/assets/img/projects/llmood/moodHappy.png";
import screen2 from "@/assets/img/projects/llmood/moodselect.png";
import screen3 from "@/assets/img/projects/llmood/moodCalendar.png";
import screen4 from "@/assets/img/projects/llmood/moodSettings.png";

const screenshots = [
  { src: screen1, alt: "Home screen", caption: "1. Home screen" },
  { src: screen2, alt: "Calendar view", caption: "2. Calendar history" },
  { src: screen3, alt: "Mood selection", caption: "3. Mood picker" },
  { src: screen4, alt: "Settings", caption: "4. Settings" },
  { src: screen1, alt: "Home screen", caption: "1. Home screen" },
  { src: screen2, alt: "Calendar view", caption: "2. Calendar history" },
  { src: screen3, alt: "Mood selection", caption: "3. Mood picker" },
  { src: screen4, alt: "Settings", caption: "4. Settings" },
];

const route = useRoute();
const slug = route.params.slug as string;

// find the matching project by slug
const project = projects.find((p) => p.slug === slug);
</script>

<template>
  <div>
    <!-- About Section -->
    <ProjectSection title="About the App">
      <p class="leading-relaxed">
        ll Mood is a simple mood tracking app designed to keep the pressure off.
        Users can log how they feel each day, view their history in a calendar,
        and gain gentle insights without overwhelming charts or comparisons.
      </p>
    </ProjectSection>
    <!-- Features -->
    <ProjectSection title="Key Features">
      <ul class="list-disc list-inside space-y-1">
        <li>Daily mood selection with persistent storage</li>
        <li>Calendar view to reflect on history</li>
        <li>Minimalist design focused on peace of mind</li>
        <li>Offline-first with planned reminder notifications</li>
      </ul>
    </ProjectSection>

    <ProjectSection title="Screenshots">
      <div
        class="flex space-x-4 overflow-x-auto pb-2 max-sm:snap-x max-sm:snap-mandatory"
      >
        <div
          v-for="(shot, i) in screenshots"
          :key="i"
          class="flex-shrink-0 w-60 flex flex-col items-center max-sm:snap-center"
        >
          <img
            :src="shot.src"
            :alt="shot.alt"
            class="rounded-lg shadow object-contain"
          />
          <p class="mt-1 text-sm text-center">{{ shot.caption }}</p>
        </div>
      </div>
    </ProjectSection>

    <!-- Links -->
    <ProjectLinks
      :sourceLink="project.sourceLink"
      :liveLink="project.liveLink"
    />
  </div>
</template>
