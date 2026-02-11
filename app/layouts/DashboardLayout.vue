<script setup lang="ts">
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'

// Import from the folder index or the specific files
// If you followed standard shadcn-vue CLI install, it's usually:
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
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