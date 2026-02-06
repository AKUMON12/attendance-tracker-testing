<script setup lang="ts">
import { AspectRatio } from "shadcn-vue/aspect-ratio"
</script>

<template>
  <AspectRatio ratio="16/9">
    <img src="/example.jpg" alt="Example" class="rounded-md object-cover" />
  </AspectRatio>
</template>
