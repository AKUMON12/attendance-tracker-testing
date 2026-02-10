<script setup lang="ts">
import { Bell, Search } from "lucide-vue-next"
import SidebarTrigger from "@/components/ui/sidebar/SidebarTrigger.vue"
import Input from "@/components/ui/input/Input.vue"
import Button from "@/components/ui/button/Button.vue"
import { ref, onMounted, onUnmounted } from "vue"

const now = ref(new Date())

// Update time every minute
let interval: number
onMounted(() => {
  interval = window.setInterval(() => {
    now.value = new Date()
  }, 60000)
})
onUnmounted(() => {
  clearInterval(interval)
})

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  })
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
}
</script>

<template>
  <header
    class="sticky top-0 z-40 flex items-center justify-between h-16 px-4 border-b border-border bg-background/80 backdrop-blur-sm"
  >
    <!-- Left section -->
    <div class="flex items-center gap-4">
      <SidebarTrigger class="p-2 hover:bg-muted rounded-lg transition-colors" />

      <!-- Search bar - hidden on mobile -->
      <div class="hidden md:flex relative">
        <Search
          class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
        />
        <Input
          type="search"
          placeholder="Search..."
          class="w-64 pl-10 bg-muted/50 border-transparent focus:border-primary"
        />
      </div>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-2">
      <!-- Notifications -->
      <Button variant="ghost" size="icon" class="relative">
        <Bell class="w-5 h-5" />
        <!-- Notification badge -->
        <span
          class="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"
        />
      </Button>

      <!-- Current time display -->
      <div class="hidden sm:block text-right">
        <p class="text-sm font-medium">{{ formatDate(now) }}</p>
        <p class="text-xs text-muted-foreground">{{ formatTime(now) }}</p>
      </div>
    </div>
  </header>
</template>
