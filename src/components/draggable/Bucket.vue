<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

const el = ref(null);

// Visual position and size (fixed or from props)
const visualPosition = {
  x: 50,
  y: 500,
  width: 150,
  height: 150,
};

// Reactive bounding box for collision, offset downward by 20px, height shrunk by 10px
const bounds = computed(() => {
  return {
    x: visualPosition.x,
    y: visualPosition.y + visualPosition.height, // offset downward
    width: visualPosition.width,
    height: visualPosition.height - 10, // smaller height
  };
});

// Optional: If you want to dynamically track size changes of the visual box, you can add a ResizeObserver or
// update logic here — but since visualPosition is fixed, no update needed.

defineExpose({
  bounds,
});
</script>

<template>
  <div
    ref="el"
    class="bucket"
    :style="{
      position: 'absolute',
      left: visualPosition.x + 'px',
      top: visualPosition.y + 'px',
      width: visualPosition.width + 'px',
      height: visualPosition.height + 'px',
      border: '2px dashed #888',
      background: 'rgba(100, 100, 255, 0.1)',
      pointerEvents: 'none',
    }"
  />
</template>
