<script setup lang="ts">
import { ref } from "vue";
import ToggleButton from "@/components/ui/buttons/ToggleButton.vue";

const props = defineProps<{
  categories: string[];
  modelValue?: string[]; // optional v-model for parent binding
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

// If parent passed v-model, use that; otherwise use internal state
const activeCategories = ref<string[]>(props.modelValue ?? []);

function toggleCategory(cat: string) {
  if (activeCategories.value.includes(cat)) {
    activeCategories.value = activeCategories.value.filter((c) => c !== cat);
  } else {
    activeCategories.value.push(cat);
  }
  emits("update:modelValue", activeCategories.value);
}
</script>

<template>
  <div class="flex gap-2 justify-center mb-4">
    <ToggleButton
      v-for="cat in categories"
      :key="cat"
      :label="cat"
      :active="activeCategories.includes(cat)"
      @update:active="() => toggleCategory(cat)"
    />
  </div>
</template>
