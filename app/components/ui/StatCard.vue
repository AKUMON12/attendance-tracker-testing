<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card"
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

const props = defineProps<StatCardProps>()

const variantStyles: Record<string, string> = {
  default: "bg-card",
  primary: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
  secondary: "bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20",
  accent: "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20",
}

const iconStyles: Record<string, string> = {
  default: "bg-muted text-foreground",
  primary: "gradient-primary text-primary-foreground",
  secondary: "gradient-accent text-white",
  accent: "bg-accent text-accent-foreground",
}
</script>

<template>
  <Card :class="cn('overflow-hidden transition-all duration-200 hover:shadow-lg', variantStyles[props.variant || 'default'], props.className)">
    <CardContent class="p-6">
      <div class="flex items-start justify-between">
        <div class="space-y-2">
          <p class="text-sm font-medium text-muted-foreground">{{ props.title }}</p>
          <p class="text-3xl font-display font-bold">{{ props.value }}</p>

          <p v-if="props.subtitle" class="text-sm text-muted-foreground">{{ props.subtitle }}</p>

          <div
            v-if="props.trend"
            :class="cn(
              'inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
              props.trend.isPositive ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'
            )"
          >
            <span>{{ props.trend.isPositive ? '↑' : '↓' }}</span>
            <span>{{ Math.abs(props.trend.value) }}%</span>
          </div>
        </div>

        <div :class="cn('p-3 rounded-xl', iconStyles[props.variant || 'default'])">
          <component :is="props.icon" class="w-6 h-6" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
