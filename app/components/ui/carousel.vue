<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "shadcn-vue/carousel"
</script>

<template>
  <Carousel>
    <CarouselContent>
      <CarouselItem>Slide 1</CarouselItem>
      <CarouselItem>Slide 2</CarouselItem>
      <CarouselItem>Slide 3</CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
