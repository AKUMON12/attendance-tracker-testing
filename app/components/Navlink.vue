<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { computed } from "vue"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  to: string
  class?: string
  activeClassName?: string
  pendingClassName?: string
}

const props = defineProps<NavLinkProps>()

const route = useRoute()

// Check if current route matches the link
const isActive = computed(() => route.path === props.to)
// Vue Router doesn’t have "pending" state like React Router,
// but you can simulate it if needed (e.g., during navigation).
const isPending = computed(() => false)

const linkClass = computed(() =>
  cn(
    props.class,
    isActive.value && props.activeClassName,
    isPending.value && props.pendingClassName
  )
)
</script>

<template>
  <RouterLink :to="props.to" :class="linkClass">
    <slot />
  </RouterLink>
</template>
