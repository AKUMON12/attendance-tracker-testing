<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot as Accordion, AccordionTrigger } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        Item 1
        <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent>
        Content for item 1
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
