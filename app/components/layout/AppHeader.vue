<script setup lang="ts">
import { Bell, Search } from "lucide-vue-next"
import { useNow, useDateFormat } from '@vueuse/core'

const now = useNow()
const formattedDate = useDateFormat(now, 'ddd, MMM D')
const formattedTime = useDateFormat(now, 'hh:mm A')
</script>

<template>
  <header
    class="sticky top-0 z-40 flex items-center justify-between h-20 px-6 border-b border-border bg-card/50 backdrop-blur-sm"
  >
    <div class="flex items-center gap-6">
      <div class="hidden md:flex relative">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search anything..."
          class="w-80 pl-12 pr-4 py-3 bg-background/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
        />
      </div>
    </div>

    <div class="flex items-center gap-4">
      <button class="relative p-3 hover:bg-accent/50 rounded-2xl transition-all duration-200 group">
        <Bell class="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-skloud-yellow to-skloud-pink rounded-full animate-pulse"></span>
      </button>

      <div class="hidden sm:block text-right">
        <p class="text-sm font-medium text-foreground">{{ formattedDate }}</p>
        <p class="text-xs text-muted-foreground">{{ formattedTime }}</p>
      </div>
    </div>
  </header>
</template>