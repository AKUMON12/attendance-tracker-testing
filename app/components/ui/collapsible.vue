<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "shadcn-vue/collapsible"
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>
      <button class="btn">Toggle</button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <p>This is hidden content</p>
    </CollapsibleContent>
  </Collapsible>
</template>
