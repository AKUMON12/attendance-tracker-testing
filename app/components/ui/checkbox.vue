<script setup lang="ts">
import { Checkbox } from "shadcn-vue/checkbox"
</script>

<template>
  <Checkbox v-model="checked" />
</template>

<script setup lang="ts">
const checked = ref(false)
</script>
