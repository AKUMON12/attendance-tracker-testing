<script setup lang="ts">
import { Clock, Loader2 } from "lucide-vue-next"
import { cn } from "@/lib/utils"

interface ClockButtonProps {
  isClockedIn: boolean
  isLoading: boolean
  clockInTime?: string | null
}

const props = defineProps<ClockButtonProps>()
const emit = defineEmits<{
  (e: "clockIn"): void
  (e: "clockOut"): void
}>()

function handleClick() {
  if (props.isClockedIn) {
    emit("clockOut")
  } else {
    emit("clockIn")
  }
}

function getElapsedTime() {
  if (!props.clockInTime) return null

  const start = new Date(props.clockInTime)
  const now = new Date()
  const diff = now.getTime() - start.getTime()

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return `${hours}h ${minutes}m`
}
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <!-- Main clock button -->
    <button
      @click="handleClick"
      :disabled="props.isLoading"
      :class="cn(
        'relative w-48 h-48 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl',
        props.isClockedIn ? 'gradient-accent glow-pink' : 'gradient-primary glow-blue'
      )"
    >
      <!-- Pulse animation ring -->
      <div
        :class="cn(
          'absolute inset-0 rounded-full animate-ping opacity-20',
          props.isClockedIn ? 'bg-secondary' : 'bg-primary'
        )"
        style="animation-duration: 2s"
      />

      <!-- Inner content -->
      <div class="relative z-10 flex flex-col items-center gap-2 text-white">
        <Loader2 v-if="props.isLoading" class="w-12 h-12 animate-spin" />
        <template v-else>
          <Clock class="w-12 h-12" />
          <span class="text-lg font-display font-bold">
            {{ props.isClockedIn ? "Clock Out" : "Clock In" }}
          </span>
        </template>
      </div>
    </button>

    <!-- Status text -->
    <div class="text-center space-y-1">
      <p
        :class="cn(
          'text-sm font-medium',
          props.isClockedIn ? 'text-secondary' : 'text-muted-foreground'
        )"
      >
        {{ props.isClockedIn ? "Currently working" : "Not clocked in" }}
      </p>
      <p
        v-if="props.isClockedIn && props.clockInTime"
        class="text-2xl font-display font-bold text-accent"
      >
        {{ getElapsedTime() }}
      </p>
    </div>
  </div>
</template>
