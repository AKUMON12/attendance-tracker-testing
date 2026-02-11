<script setup lang="ts">
import { useAuth } from "@/composables/useAuth"
import { useRoute, useRouter } from "vue-router"
import Skeleton from "@/components/ui/skeleton.vue" // Fixed casing

const props = defineProps<{ requireAdmin?: boolean }>()
const { isAuthenticated, isAdmin, isLoading } = useAuth()
const route = useRoute()
const router = useRouter()

// Handle redirects in script instead of template
watchEffect(() => {
  if (isLoading.value) return

  if (!isAuthenticated.value) {
    router.replace({ path: '/login', query: { from: route.fullPath } })
  } else if (props.requireAdmin && !isAdmin.value) {
    router.replace({ path: '/dashboard' })
  }
})
</script>

<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-background">
    <div class="space-y-4 w-full max-w-md">
      <Skeleton class="h-12 w-3/4 mx-auto" />
      <Skeleton class="h-8 w-1/2 mx-auto" />
      <Skeleton class="h-64 w-full" />
    </div>
  </div>
  <slot v-else-if="isAuthenticated && (!props.requireAdmin || isAdmin)" />
</template>