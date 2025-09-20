<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import Draggable from "@/components/draggable/Draggable.vue";
import Bucket from "@/components/draggable/Bucket.vue";

const router = useRouter();
const targets = ref([]);
const bucketRef = ref(null);
const draggableWrapper = ref<HTMLElement | null>(null);

function handleCollision({ draggablePath }) {
  setTimeout(() => router.push(draggablePath), 0);
}

watchEffect(() => {
  if (bucketRef.value) {
    targets.value = [bucketRef.value.bounds];
  }
});

const initialPosX = ref(300);
const initialPosY = ref(100);

onMounted(() => {
  initialPosX.value = window.innerWidth / 2;
  initialPosY.value = window.innerHeight / 2;
});
</script>

<template>
  <div ref="draggableWrapper">
    <Draggable
      :targets="targets"
      :onCollision="handleCollision"
      :name="'About'"
      :path="'/about'"
      :xPos="initialPosX"
      :yPos="initialPosY"
      :width="64"
      :height="64"
    />
  </div>
  <Bucket ref="bucketRef" />
</template>
