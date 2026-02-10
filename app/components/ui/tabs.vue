<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from "shadcn-vue/tabs"

const activeTab = ref("account")
</script>

<template>
  <Tabs v-model="activeTab" class="w-full">
    <!-- Tab List -->
    <TabsList class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <TabsTrigger
        value="account"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium
               ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground
               data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
               focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Account
      </TabsTrigger>
      <TabsTrigger
        value="password"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium
               ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground
               data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
               focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Password
      </TabsTrigger>
    </TabsList>

    <!-- Tab Content -->
    <TabsContent
      value="account"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <p>Account settings go here.</p>
    </TabsContent>

    <TabsContent
      value="password"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <p>Password settings go here.</p>
    </TabsContent>
  </Tabs>
</template>
