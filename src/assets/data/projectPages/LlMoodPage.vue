<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";
import ProjectLinks from "@/components/sections/ProjectLinks.vue";
import screen1 from "@/assets/img/projects/llmood/moodselect.png";
import screen2 from "@/assets/img/projects/llmood/moodHappy.png";
import screen3 from "@/assets/img/projects/llmood/moodCalendar.png";
import screen4 from "@/assets/img/projects/llmood/moodSettings.png";

const screenshots = [
  {
    src: screen1,
    alt: "Mood selection",
    caption: "Pick your mood for the day with a single tap.",
  },
  {
    src: screen2,
    alt: "Mood Chosen",
    caption: "See a gentle reflection after logging.",
  },
  {
    src: screen3,
    alt: "Mood Calendar",
    caption: "Browse your history on a simple calendar view.",
  },
  {
    src: screen4,
    alt: "Settings",
    caption: "Adjust reminders and preferences in settings.",
  },
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
      <p>
        LL Mood is a mood tracking app I built as a personal project. My goal
        was to design a tool that feels light, pressure-free, and
        approachable—focusing more on consistency than on complex analytics.
        From a development perspective, the challenge was building an
        offline-first app with clean storage, a minimalist UI, and a gentle
        reminder system.
      </p>
    </ProjectSection>
    <!-- Features -->
    <ProjectSection title="Key Features">
      <ul class="list-disc list-inside space-y-1">
        <li>
          Persistent daily mood tracking (local storage, no account required)
        </li>
        <li>
          Calendar-based history to encourage reflection without comparison.
        </li>
        <li>Minimalist UI/UX — designed for calm over complexity.</li>
        <li>Offline-first design with local notifications</li>
      </ul>
    </ProjectSection>

    <ProjectSection title="Future Plans">
      <p>
        Future Plans Expanding customization (user-defined moods, journaling),
        premium/free tiers, and donation support.
      </p>
    </ProjectSection>

    <ProjectSection title="In Action">
      <p class="leading-relaxed mb-4">
        Here’s a quick walkthrough of LL Mood — from logging a mood to reviewing
        your history and adjusting reminders.
      </p>
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
          <p class="mt-1 text-sm text-center">
            {{ shot.caption }}
          </p>
        </div>
      </div>
    </ProjectSection>

    <ProjectSection title="Try It Yourself">
      <p class="leading-relaxed mb-4">
        Curious to dig deeper? You can explore the source code or check out the
        live app once it’s published.
      </p>
      <ProjectLinks
        :sourceLink="project.sourceLink"
        :liveLink="project.liveLink"
      />
    </ProjectSection>
    <!-- Links -->
  </div>
</template>
