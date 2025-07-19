<script setup lang="ts">
import { ref } from "vue";
import { useMomentum } from "@/composables/useMomentum";
import { isCollide } from "@/utils/collision.js";

const props = withDefaults(
  defineProps<{
    targets?: Array<{ x: number; y: number; width: number; height: number }>;
    onCollision?: (target: any) => void;
    name?: string;
    path?: string;
  }>(),
  {
    path: "",
  }
);

const boxWidth = 100;
const boxHeight = 100;

const {
  x,
  y,
  incrementPos,
  applyFriction,
  checkBoundaries,
  setVelocity,
  applyAccel,
  applyGravity,
  checkStop,
} = useMomentum(100, 100, boxWidth, boxHeight);

// --- Drag State ---
let dragging = false;
let momentumAllowed = false;
let collisionAllowed = false;
let lastMouseX = 0;
let lastMouseY = 0;
let lastTime = 0;

// --- Event Handlers ---
function startDrag(e) {
  dragging = true;
  setLastMouse(e);
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);
}

function onDrag(e) {
  if (!dragging) return;
  momentumAllowed = true;
  collisionAllowed = true;

  const now = performance.now();
  const dt = now - lastTime || 1;

  setVelocity((e.clientX - lastMouseX) / dt, (e.clientY - lastMouseY) / dt);

  incrementPos(e.clientX - lastMouseX, e.clientY - lastMouseY);
  setLastMouse(e);
}

function stopDrag() {
  dragging = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
  requestAnimationFrame(momentum);
  requestAnimationFrame(gravity);

  setTimeout(() => {
    if (!dragging) {
      momentumAllowed = false;
    }
  }, 700);
}

// --- Helpers ---
function setLastMouse(e) {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  lastTime = performance.now();
}

// --- Physics Loop ---
function momentum() {
  if (!momentumAllowed) return;
  applyFriction();
  applyAccel(4);

  checkBoundaries();
  if (!checkStop()) {
    requestAnimationFrame(momentum);
  }
}

function gravity() {
  if (dragging) return;
  applyGravity(0.1);
  checkBoundaries();
  checkCollision(props.targets);
  requestAnimationFrame(gravity);
}

function checkCollision(targets) {
  if (!collisionAllowed) return;
  const box = { x: x.value, y: y.value, width: boxWidth, height: boxHeight };

  for (const target of targets) {
    if (isCollide(target, box)) {
      collisionAllowed = false;
      props.onCollision?.({
        draggablePath: props?.path,
      });
      return true;
    }
  }
  return false;
}
</script>
<template>
  <div
    class="box"
    @mousedown="startDrag"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: `${boxWidth}px`,
      height: `${boxHeight}px`,
    }"
  >
    <p class="paragraph">{{ name }}</p>
  </div>
</template>

<style scoped>
.box {
  position: absolute;
  background: linear-gradient(145deg, #3a8ddb, #1e5fab);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  cursor: grab;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  transition: transform 0.1s ease;
  transform-style: preserve-3d;
}

.box:active {
  cursor: grabbing;
  transform: scale(0.98);
}

.paragraph {
  margin: 0;
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.2;
  word-wrap: break-word;
}
</style>
