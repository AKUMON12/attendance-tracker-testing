<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "shadcn-vue/pagination"

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-vue-next"
</script>

<template>
  <Pagination class="mx-auto flex w-full justify-center">
    <PaginationContent class="flex flex-row items-center gap-1">
      <!-- Previous -->
      <PaginationItem>
        <PaginationPrevious href="/page/1">
          <ChevronLeft class="h-4 w-4" />
          <span>Previous</span>
        </PaginationPrevious>
      </PaginationItem>

      <!-- Page Links -->
      <PaginationItem>
        <PaginationLink href="/page/1" isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/page/2">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis>
          <MoreHorizontal class="h-4 w-4" />
        </PaginationEllipsis>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/page/10">10</PaginationLink>
      </PaginationItem>

      <!-- Next -->
      <PaginationItem>
        <PaginationNext href="/page/2">
          <span>Next</span>
          <ChevronRight class="h-4 w-4" />
        </PaginationNext>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>
