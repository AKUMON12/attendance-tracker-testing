<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport
} from "shadcn-vue/navigation-menu"

import { ChevronDown } from "lucide-vue-next"
</script>

<template>
  <NavigationMenu class="relative z-10 flex max-w-max flex-1 items-center justify-center">
    <NavigationMenuList class="group flex flex-1 list-none items-center justify-center space-x-1">
      <!-- Item 1 -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          Features
          <ChevronDown class="ml-1 h-3 w-3 transition group-data-[state=open]:rotate-180" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="p-4 bg-popover rounded-md shadow-md">
          <NavigationMenuLink href="/feature-1" class="block px-2 py-1 hover:bg-accent hover:text-accent-foreground">
            Feature 1
          </NavigationMenuLink>
          <NavigationMenuLink href="/feature-2" class="block px-2 py-1 hover:bg-accent hover:text-accent-foreground">
            Feature 2
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Item 2 -->
      <NavigationMenuItem>
        <NavigationMenuLink href="/pricing" class="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
          Pricing
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <!-- Indicator + Viewport -->
    <NavigationMenuIndicator class="top-full z-[1] flex h-1.5 items-end justify-center">
      <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuIndicator>
    <NavigationMenuViewport class="origin-top-center relative mt-1.5 rounded-md border bg-popover shadow-lg" />
  </NavigationMenu>
</template>
