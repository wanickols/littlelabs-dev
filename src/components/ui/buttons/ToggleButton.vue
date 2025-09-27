<script setup lang="ts">

const props = defineProps<{
  label: string;
  active: boolean;
}>();

const emit = defineEmits<{
  (e: "update:active", value: boolean): void;
}>();

function toggle() {
  emit("update:active", !props.active);
}
</script>

<template>
  <button
    :class="[
      'px-3 py-1 rounded-xl cursor-pointer',
      active
        ? 'bg-blue-500 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    ]"
    @click="toggle"
  >
    {{ label }}
  </button>
</template>
