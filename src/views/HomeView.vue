<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import Draggable from "@/components/Draggable/Draggable.vue";
import Bucket from "@/components/Draggable/Bucket.vue";

const router = useRouter();
const targets = ref([]);

const bucketRef = ref(null);

function handleCollision({ draggablePath }) {
  setTimeout(() => router.push(draggablePath), 0);
}

watchEffect(() => {
  if (bucketRef.value) {
    targets.value = [bucketRef.value.bounds];
  }
});
</script>

<template>
  <Draggable
    :targets="targets"
    :onCollision="handleCollision"
    :name="'About'"
    :path="'/about'"
  />
  <Bucket ref="bucketRef" />
</template>
