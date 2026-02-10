<script setup lang="ts">
import { CalendarRoot, type CalendarRootProps } from 'radix-vue'
const props = defineProps<CalendarRootProps>()
</script>

<template>
  <CalendarRoot v-bind="props" class="p-3">
    </CalendarRoot>
</template>