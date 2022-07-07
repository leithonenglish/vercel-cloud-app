<script lang="ts" setup>
import { pathStyle, svgStyle } from "./circle-check-filled.css";
defineProps<{ svgClass?: string; pathClass?: string }>();
</script>
<template>
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    shape-rendering="geometricPrecision"
    :class="svgClass || svgStyle"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
    ></path>
    <path d="M8 11.8571L10.5 14.3572L15.8572 9" fill="none" :class="pathClass || pathStyle"></path>
  </svg>
</template>
