<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, computed } from "vue"

const containerRef = ref<HTMLDivElement | null>(null)
const mousePosition = reactive({ x: 0.5, y: 0.5 })

// Move the complex SVG noise string here
const noiseImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  mousePosition.x = (e.clientX - rect.left) / rect.width
  mousePosition.y = (e.clientY - rect.top) / rect.height
}

// Add event listeners only on client side
if (process.client) {
  onMounted(() => window.addEventListener("mousemove", handleMouseMove))
  onUnmounted(() => window.removeEventListener("mousemove", handleMouseMove))
}

function getTransform(intensity: number, reverse = false) {
  const xOffset = (mousePosition.x - 0.5) * intensity * (reverse ? -1 : 1)
  const yOffset = (mousePosition.y - 0.5) * intensity * (reverse ? -1 : 1)
  return `translate(${xOffset}px, ${yOffset}px)`
}
</script>

<template>
  <div ref="containerRef" class="fixed inset-0 overflow-hidden pointer-events-none" style="z-index: -1">
    <div class="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

    <div class="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-40 blur-[120px] animate-mesh-wave"
      :style="{ background: 'radial-gradient(circle, hsl(var(--skloud-blue)) 0%, transparent 70%)', transform: getTransform(50) }" />

    <div class="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-35 blur-[100px] animate-mesh-wave-reverse"
      :style="{ background: 'radial-gradient(circle, hsl(var(--skloud-pink)) 0%, transparent 70%)', transform: getTransform(80, true) }" />

    <div class="absolute -bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-30 blur-[150px] animate-mesh-wave"
      :style="{ background: 'radial-gradient(circle, hsl(var(--skloud-purple)) 0%, transparent 70%)', transform: getTransform(60) }" />

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20 blur-[80px] animate-mesh-wave-reverse"
      :style="{
        background: 'radial-gradient(circle, hsl(var(--skloud-yellow)) 0%, transparent 70%)',
        transform: `translate(calc(-50% + ${(mousePosition.x - 0.5) * 100}px), calc(-50% + ${(mousePosition.y - 0.5) * 100}px))`
      }" />

    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px] animate-mesh-wave"
      :style="{ background: 'radial-gradient(circle, hsl(var(--skloud-blue)) 0%, transparent 70%)', transform: getTransform(40, true) }" />

    <div class="absolute inset-0 opacity-[0.02]" :style="{ backgroundImage: noiseImage }" />
  </div>
</template>