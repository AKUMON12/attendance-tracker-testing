<script setup lang="ts">
import { cn } from "@/lib/utils"
import type { Component } from "vue"

interface Trend {
  value: number
  isPositive: boolean
}

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon: Component
  trend?: Trend
  variant?: "default" | "primary" | "secondary" | "accent"
  className?: string
}

// 1. Assign defineProps to a constant named 'props'
const props = defineProps<StatCardProps>()

// 2. These must be defined in the script to be used in the template
const variantStyles: Record<string, string> = {
  default: "bg-card",
  primary: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
  secondary: "bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20",
  accent: "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20",
}

const iconStyles: Record<string, string> = {
  default: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground", // changed gradient-primary to bg-primary for safety
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
}
</script>

<template>
  <Card :class="cn('overflow-hidden transition-all duration-200 hover:shadow-lg', variantStyles[variant || 'default'], className)">
    <CardContent class="p-6">
      <div class="flex items-start justify-between">
        <div class="space-y-2">
          <p class="text-sm font-medium text-muted-foreground">{{ title }}</p>
          <p class="text-3xl font-bold tracking-tight">{{ value }}</p>

          <p v-if="subtitle" class="text-sm text-muted-foreground">{{ subtitle }}</p>

          <div
            v-if="trend"
            :class="cn(
              'inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
              trend.isPositive ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'
            )"
          >
            <span>{{ trend.isPositive ? '↑' : '↓' }}</span>
            <span>{{ Math.abs(trend.value) }}%</span>
          </div>
        </div>

        <div :class="cn('p-3 rounded-xl', iconStyles[variant || 'default'])">
          <component :is="icon" class="w-6 h-6" />
        </div>
      </div>
      <slot />
    </CardContent>
  </Card>
</template>