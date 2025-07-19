<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  copyText: {
    type: String,
    required: true,
  },
  displayString: {
    type: String,
    required: false,
  },
});

const copied = ref(false);
const displayLabel = computed(() => props.displayString || "Copy");

const copy = async () => {
  try {
    await navigator.clipboard.writeText(props.copyText);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (e) {
    console.error("Copy failed:", e);
  }
};
</script>

<template>
  <button
    @click="copy"
    class="bg-base-200 text-base-content font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition"
  >
    <span v-if="!copied">{{ displayLabel }}</span>
    <span v-else>Copied!</span>
  </button>
</template>
