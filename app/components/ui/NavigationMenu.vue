<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const NavigationMenu = NavigationMenuRoot
</script>

<template>
  <NavigationMenuRoot
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', $attrs.class as string)"
  >
    <slot />
    
    <div class="perspective-[2000px] absolute left-0 top-full flex justify-center">
      <NavigationMenuViewport
        :class="cn('origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]')"
      />
    </div>
  </NavigationMenuRoot>
</template>