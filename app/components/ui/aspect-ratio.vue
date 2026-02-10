<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
</script>

<template>
  <AspectRatio :ratio="16 / 9">
    <img 
      src="/example.jpg" 
      alt="Example" 
      class="h-full w-full rounded-md object-cover" 
    />
  </AspectRatio>
</template>
