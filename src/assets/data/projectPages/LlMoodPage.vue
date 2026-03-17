<script setup lang="ts">
import { useRoute } from "vue-router";
import { projects } from "@/assets/data/projects"; // wherever your array is
import ProjectSection from "@/components/sections/ProjectSection.vue";
import ProjectLinks from "@/components/sections/ProjectLinks.vue";
import screen1 from "@/assets/img/projects/llmood/moodselect.png";
import screen2 from "@/assets/img/projects/llmood/moodHappy.png";
import screen3 from "@/assets/img/projects/llmood/moodcalendar.png";
import screen4 from "@/assets/img/projects/llmood/moodsettings.png";

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
        I built LL Mood mostly for myself. I was annoyed at existing mood apps
        because they all wanted you to log in or made things more complicated
        than necessary. I wanted something quick and intuitive, so I could just
        check in with how I was feeling. On the dev side, it was fun to make the
        app respond to your current mood, adapting the pages slightly depending
        on your selection. It’s a small, focused project, but I really enjoyed
        polishing the details and making it feel smooth and personal.
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
        <li>Minimalist UI/UX designed for calm over complexity.</li>
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
      <p>
        Here’s a quick walkthrough of LL Mood — from logging a mood to reviewing
        your history and adjusting reminders.
      </p>

      <div
        class="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-base-100"
      ></div>

      <div
        class="flex space-x-4 overflow-x-auto pb-2 max-sm:snap-x max-sm:snap-mandatory pr-4"
      >
        <div
          v-for="(shot, i) in screenshots"
          :key="i"
          class="flex-shrink-0 w-full sm:w-60 flex flex-col items-center max-sm:snap-center"
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

    <ProjectSection title="Try It Yourself">
      <p>
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
