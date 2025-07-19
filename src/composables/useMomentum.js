// src/composables/useMomentum.js
import { ref } from "vue";

export function useMomentum(
  initialX = 100,
  initialY = 100,
  boxWidth = 100,
  boxHeight = 100
) {
  // Reactive position
  const x = ref(initialX);
  const y = ref(initialY);

  // Internal velocity (not reactive)
  let velocityX = 0;
  let velocityY = 0;

  // Constants — tweak as needed
  const FRICTION = 0.95;
  const BOUNCE_DAMPING = 0.5;

  // Update position by increments
  function incrementPos(dx, dy) {
    x.value += dx;
    y.value += dy;
  }

  // Apply friction to velocity
  function applyFriction() {
    velocityX *= FRICTION;
    velocityY *= FRICTION;
  }

  function applyGravity(gravityAccel) {
    velocityY += gravityAccel;
    y.value += velocityY;
  }

  // Bounce off boundaries, reflect velocity with damping
  function checkBoundaries() {
    const maxX = window.innerWidth - boxWidth;
    const maxY = window.innerHeight - boxHeight;

    if (x.value < 0) {
      x.value = 0;
      velocityX = -velocityX * BOUNCE_DAMPING;
    } else if (x.value > maxX) {
      x.value = maxX;
      velocityX = -velocityX * BOUNCE_DAMPING;
    }

    if (y.value < 0) {
      y.value = 0;
      velocityY = -velocityY * BOUNCE_DAMPING;
    } else if (y.value > maxY) {
      y.value = maxY;
      velocityY = -velocityY * BOUNCE_DAMPING;
    }
  }

  function checkStop() {
    if (Math.abs(velocityX) > 0.005 || Math.abs(velocityY) > 0.005) {
      return false;
    }
    return true;
  }

  // Set velocity (from drag or other forces)
  function setVelocity(vx, vy) {
    velocityX = vx;
    velocityY = vy;
  }

  // Accessor for velocity (if needed)
  function applyAccel(accelMod) {
    incrementPos(velocityX * accelMod, velocityY * accelMod);
  }

  return {
    x,
    y,
    incrementPos,
    applyFriction,
    checkBoundaries,
    setVelocity,
    applyAccel,
    applyGravity,
    checkStop,
  };
}
