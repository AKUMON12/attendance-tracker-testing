<script setup lang="ts">
import { Progress } from "shadcn-vue/progress"

const progressValue = ref(60) // example value
</script>

<template>
  <Progress
    :value="progressValue"
    class="relative h-4 w-full overflow-hidden rounded-full bg-secondary"
  >
    <div
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ transform: `translateX(-${100 - (progressValue || 0)}%)` }"
    />
  </Progress>
</template>
