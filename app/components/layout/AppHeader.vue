<script setup lang="ts">
import { Bell, Search } from "lucide-vue-next"
import { SidebarTrigger } from "@/components/ui/sidebar" 
import Input from "@/components/ui/input/Input.vue"
import Button from "@/components/ui/button/Button.vue"
import { useNow, useDateFormat } from '@vueuse/core'

// VueUse handles the reactive date and updates automatically
const now = useNow()

// These reactive strings will update every second/minute automatically
const formattedDate = useDateFormat(now, 'ddd, MMM D')
const formattedTime = useDateFormat(now, 'hh:mm A')
</script>

<template>
  <header
    class="sticky top-0 z-40 flex items-center justify-between h-16 px-4 border-b border-border bg-background/80 backdrop-blur-sm"
  >
    <div class="flex items-center gap-4">
      <SidebarTrigger class="p-2 hover:bg-muted rounded-lg transition-colors" />

      <div class="hidden md:flex relative">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          class="w-64 pl-10 bg-muted/50 border-transparent focus:border-primary"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <Button variant="ghost" size="icon" class="relative">
        <Bell class="w-5 h-5" />
        <span class="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
      </Button>

      <div class="hidden sm:block text-right">
        <p class="text-sm font-medium">{{ formattedDate }}</p>
        <p class="text-xs text-muted-foreground">{{ formattedTime }}</p>
      </div>
    </div>
  </header>
</template>