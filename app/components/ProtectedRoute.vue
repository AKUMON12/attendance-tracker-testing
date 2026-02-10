<script setup lang="ts">
import { useAuth } from "@/composables/useAuth"
import { useRoute, useRouter } from "vue-router"
import Skeleton from "@/components/ui/Skeleton.vue"

interface ProtectedRouteProps {
  requireAdmin?: boolean
}

const props = defineProps<ProtectedRouteProps>()

const { isAuthenticated, isAdmin, isLoading } = useAuth()
const route = useRoute()
const router = useRouter()
</script>

<template>
  <!-- Loading state -->
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-background">
    <div class="space-y-4 w-full max-w-md">
      <Skeleton class="h-12 w-3/4 mx-auto" />
      <Skeleton class="h-8 w-1/2 mx-auto" />
      <Skeleton class="h-64 w-full" />
    </div>
  </div>

  <!-- Redirect if not authenticated -->
  <div v-else-if="!isAuthenticated">
    <!-- programmatic redirect -->
    {{ router.replace({ path: '/login', query: { from: route.fullPath } }) }}
  </div>

  <!-- Redirect if admin required but user is not admin -->
  <div v-else-if="props.requireAdmin && !isAdmin">
    {{ router.replace({ path: '/dashboard' }) }}
  </div>

  <!-- Render children if authorized -->
  <slot v-else />
</template>
