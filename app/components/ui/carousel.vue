<script setup lang="ts">
import { useProvideCarousel } from './useCarousel'
// Types usually live in the 'embla-carousel' core or are exported as EmblaCarouselType
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel' 
import useEmblaCarousel from 'embla-carousel-vue'

interface CarouselProps {
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
})

const [emblaRef, emblaApi] = useEmblaCarousel(props.opts, props.plugins)

// This helper (which we will define) allows sub-components to access the API
useProvideCarousel({
  carouselRef: emblaRef,
  carouselApi: emblaApi,
  orientation: props.orientation,
})
</script>

<template>
  <div class="relative" role="region" aria-roledescription="carousel">
    <slot />
  </div>
</template>