<script setup lang="ts">
import CopyMeButton from "@/components/ui/buttons/copyMeButton.vue";
</script>

<template>
  <section class="px-fluid text-base-content">
    <h2 class="titlexl">Contact Me</h2>

    <h3 class="subtitle mt-6">Let’s Talk</h3>
    <p class="paragraph">
      Got a project, idea, question, or issue? I’d love to hear from you.
      Whether you’re reporting a bug, sharing feedback, or reaching out to
      collaborate — I’m all ears. Just send a message and I’ll get back to you
      soon.
    </p>

    <div class="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href="mailto:support@littlelabs.dev"
        class="inline-block bg-primary text-primary-content font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition"
      >
        Send Email
      </a>
      <CopyMeButton
        copy-text="support@littlelabs.dev"
        display-string="Copy Email"
      />
    </div>
  </section>
</template>
