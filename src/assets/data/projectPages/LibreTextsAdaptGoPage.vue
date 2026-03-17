<script setup>
import ProjectSection from "@/components/sections/ProjectSection.vue";
import ProjectLinks from "@/components/sections/ProjectLinks.vue";
import screen1 from "@/assets/img/projects/libretexts/splash.png";
import screen2 from "@/assets/img/projects/libretexts/login.png";
import screen3 from "@/assets/img/projects/libretexts/courses.png";
import screen4 from "@/assets/img/projects/libretexts/course_details.png";
import screen5 from "@/assets/img/projects/libretexts/questions.png";
import screen6 from "@/assets/img/projects/libretexts/question_details.png";

const screenshots = [
  {
    src: screen1,
    alt: "Splash Screen",
    caption: "Welcome screen with branding",
  },
  {
    src: screen2,
    alt: "Login Screen",
    caption: "Landing Page",
  },
  { src: screen3, alt: "Courses Page", caption: "Browse available courses" },
  { src: screen4, alt: "Course Details", caption: "View course assignments" },
  {
    src: screen5,
    alt: "Questions Page",
    caption: "Access classroom questions",
  },
  {
    src: screen6,
    alt: "Question Details",
    caption: "Detailed view of a question",
  },
];

const project = {
  sourceLink: "", // leave blank for client project
};
</script>

<template>
  <div>
    <!-- About Section -->
    <ProjectSection title="About the App">
      <p>
        LibreTexts Adapt Go was a mobile companion app designed to bring
        classroom interaction and coursework access directly to students’
        devices. It integrated with the LibreTexts platform to support live
        polling, assignments, and quizzes in real time.
      </p>
      <p>
        The mobile app is no longer actively maintained, but it demonstrates
        real-world integration, SSO authentication, and classroom engagement
        design.
      </p>
      <p>
        Learn more about the platform:
        <a href="https://adapt.libretexts.org" target="_blank" class="link">
          LibreTexts Adapt Platform
        </a>
      </p>
    </ProjectSection>

    <!-- Key Features -->
    <ProjectSection title="Key Features">
      <ul class="list-disc list-inside space-y-1">
        <li>Live polling and real-time classroom interaction</li>
        <li>Access to assignments and quizzes from mobile devices</li>
        <li>Account-based sync with the LibreTexts platform</li>
        <li>Mobile-first interface optimized for classroom use</li>
      </ul>
    </ProjectSection>

    <!-- Technical Highlights -->
    <ProjectSection title="Technical Highlights">
      <ul class="list-disc list-inside space-y-1">
        <li>Integrated external API for coursework and polling</li>
        <li>Implemented authentication flow using SSO</li>
        <li>
          Built for mobile devices as a companion to an existing web ecosystem
        </li>
        <li>Managed real-time data flow under classroom constraints</li>
      </ul>
    </ProjectSection>

    <!-- In Action / Gallery -->
    <ProjectSection title="In Action">
      <p>
        Here’s a preview of the mobile interface, showing key screens from
        splash to detailed question view.
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

    <!-- Project Links -->
    <ProjectSection title="Project Links">
      <p>
        This project was developed for a client and is not publicly available,
        but you can explore the LibreTexts platform for context.
      </p>
      <ProjectLinks :sourceLink="project.sourceLink" />
    </ProjectSection>
  </div>
</template>
