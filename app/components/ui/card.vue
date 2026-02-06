<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "shadcn-vue/card"
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Project Status</CardTitle>
      <CardDescription>Overview of current progress</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Tasks completed: 12/20</p>
    </CardContent>
    <CardFooter>
      <Button variant="secondary">View Details</Button>
    </CardFooter>
  </Card>
</template>
