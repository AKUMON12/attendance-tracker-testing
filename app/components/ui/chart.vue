<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { defineComponent } from 'vue'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    { label: 'Sales', data: [40, 20, 12], backgroundColor: '#3b82f6' }
  ]
}
const chartOptions = { responsive: true }
</script>

<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
