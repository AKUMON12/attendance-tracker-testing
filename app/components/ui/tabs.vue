<script setup lang="ts">
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue"
import { ref } from "vue"

const activeTab = ref("account")
</script>

<template>
  <TabsRoot 
    v-bind="$attrs" 
    :class="cn('w-full', $attrs.class as string)"
  >
    <slot />
  </TabsRoot>
</template>