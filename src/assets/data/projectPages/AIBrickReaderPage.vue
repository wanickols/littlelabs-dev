<script setup lang="ts">
import ProjectSection from "@/components/sections/ProjectSection.vue";
import segmented from "@/assets/img/ProjectThumbnails/BrickReader.png";
import edged from "@/assets/img/projects/brickreader/bricksEdge.png";
import dilated from "@/assets/img/projects/brickreader/bricksDilated.png";
import color from "@/assets/img/projects/brickreader/bricksColor.png";
import results from "@/assets/img/projects/brickreader/Results.png";
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 space-y-6">
    <!-- About -->
    <ProjectSection title="About the Project">
      <p class="leading-relaxed">
        AI BrickReader is a computer vision project developed to read alumni
        names engraved on sidewalk bricks. The system processes photos, segments
        each brick using <strong>OpenCV</strong>, and applies
        <strong>PaddleOCR</strong>
        in a double-pass workflow: the first pass identifies which bricks
        contain text, and the second extracts confirmed inscriptions. Results
        are exported to structured CSV files for easy use.
      </p>
      <p class="leading-relaxed mt-2">
        While further expansion was planned, development paused after leadership
        changes. The project nonetheless demonstrates practical skills in image
        processing, OCR integration, and building an end-to-end data pipeline.
      </p>
    </ProjectSection>

    <ProjectSection title="Tech Stack">
      <ul class="list-disc list-inside leading-relaxed">
        <li><strong>Python</strong> — main development language</li>
        <li>
          <strong>OpenCV (cv2)</strong> — brick segmentation and preprocessing
        </li>
        <li><strong>PaddleOCR</strong> — double-pass text recognition</li>
        <li><strong>CSV Export</strong> — structured data output</li>
      </ul>
    </ProjectSection>

    <ProjectSection title="How It Works">
      <p class="leading-relaxed mb-6">
        The BrickReader workflow uses computer vision and OCR in several stages
        to extract text from sidewalk bricks:
      </p>

      <!-- 2x2 grid for preprocessing steps -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <img
            :src="color"
            alt="Original brick image"
            class="w-full rounded-lg shadow"
          />
          <p class="mt-1 text-sm text-center">1. Original photo</p>
        </div>
        <div>
          <img
            :src="edged"
            alt="Edge detected bricks"
            class="w-full rounded-lg shadow"
          />
          <p class="mt-1 text-sm text-center">2. Edge detection with OpenCV</p>
        </div>
        <div>
          <img
            :src="dilated"
            alt="Dilated bricks"
            class="w-full rounded-lg shadow"
          />
          <p class="mt-1 text-sm text-center">
            3. Dilation to strengthen contours
          </p>
        </div>
        <div>
          <img
            :src="segmented"
            alt="Segmented bricks"
            class="w-full rounded-lg shadow"
          />
          <p class="mt-1 text-sm text-center">
            4. Segmented into individual bricks
          </p>
        </div>
      </div>

      <!-- Full width results image -->
      <div>
        <img
          :src="results"
          alt="OCR results output"
          class="w-full rounded-lg shadow"
        />
        <p class="mt-1 text-center">
          5. Double-pass OCR extracts confirmed text and outputs to CSV
        </p>
      </div>
    </ProjectSection>
  </div>
</template>
