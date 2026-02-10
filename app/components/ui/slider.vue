<script setup lang="ts">
import { Slider } from "shadcn-vue/slider"

const sliderValue = ref([50]) // example value
</script>

<template>
  <Slider
    v-model="sliderValue"
    class="relative flex w-full touch-none select-none items-center"
  >
    <div class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <div
        class="absolute h-full bg-primary"
        :style="{ width: `${sliderValue[0]}%` }"
      />
    </div>
    <div
      class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
             disabled:pointer-events-none disabled:opacity-50"
    />
  </Slider>
</template>
