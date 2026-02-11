<script setup lang="ts">
import { 
  PaginationRoot, 
  PaginationList, 
  PaginationListItem, 
  PaginationPrev, 
  PaginationNext, 
  PaginationEllipsis 
} from 'radix-vue'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

// Exporting the Root as Pagination
const Pagination = PaginationRoot
</script>

<template>
  <PaginationRoot v-bind="$attrs" :class="cn('mx-auto flex w-full justify-center', $attrs.class as string)">
    <slot />
  </PaginationRoot>
</template>