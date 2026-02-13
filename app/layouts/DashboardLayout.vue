<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex w-full bg-background">
    <AppSidebar />

    <div class="flex-1 flex flex-col">
      <AppHeader />

      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>