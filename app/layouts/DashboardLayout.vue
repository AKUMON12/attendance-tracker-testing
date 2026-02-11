<script setup lang="ts">
// Nuxt auto-imports these if they are in components/layout/ or components/ui/
// But we'll be explicit for clarity
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { SidebarProvider, SidebarInset } from '../components/ui/sidebar/SidebarTrigger.vue'
</script>

<template>
  <SidebarProvider>
    <div class="min-h-screen flex w-full bg-background">
      <AppSidebar />

      <SidebarInset class="flex-1 flex flex-col">
        <AppHeader />

        <main class="flex-1 p-6 overflow-y-auto">
          <slot />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
</template>