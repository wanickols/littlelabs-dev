<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMomentum } from "@/composables/useMomentum";
import { isCollide } from "@/utils/collision.js";

const props = withDefaults(
  defineProps<{
    targets?: Array<{ x: number; y: number; width: number; height: number }>;
    onCollision?: (target: any) => void;
    xPos: number;
    yPos: number;
    name?: string;
    path?: string;
    width: number;
    height: number;
  }>(),
  {
    path: "",
  }
);

const {
  x,
  y,
  incrementPos,
  setPos,
  applyFriction,
  checkBoundaries,
  setVelocity,
  applyAccel,
  applyGravity,
  checkStop,
} = useMomentum(props.width, props.height);

const boxRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);

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
  setPos(0, 0);
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
  const box = {
    x: x.value,
    y: y.value,
    width: props.width,
    height: props.height,
  };

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

onMounted(() => {
  incrementPos(props.xPos, props.yPos);
  if (!boxRef.value || !textRef.value) return;

  const box = boxRef.value;
  const text = textRef.value;

  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;

  const fontSize = Math.min(boxWidth, boxHeight) * 0.6; // tweak 0.6 as needed

  text.style.fontSize = `${fontSize}px`;
});
</script>
<template>
  <div
    class="box"
    @mousedown="startDrag"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: `${props.width}px`,
      height: `${props.height}px`,
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
  line-height: 1.2;
  word-wrap: break-word;
}
</style>
