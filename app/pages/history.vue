<script setup lang="ts">
import { CalendarDays, Download, Filter } from 'lucide-vue-next'

definePageMeta({
  layout: 'dashboard-layout'
})

// Mock data for demonstration
const attendanceHistory = ref([
  {
    id: 1,
    date: '2024-02-12',
    clockIn: '09:00 AM',
    clockOut: '05:30 PM',
    totalHours: '8h 30m',
    status: 'present'
  },
  {
    id: 2,
    date: '2024-02-11',
    clockIn: '09:15 AM',
    clockOut: '05:45 PM',
    totalHours: '8h 30m',
    status: 'late'
  },
  {
    id: 3,
    date: '2024-02-10',
    clockIn: '08:45 AM',
    clockOut: '05:15 PM',
    totalHours: '8h 30m',
    status: 'present'
  },
  {
    id: 4,
    date: '2024-02-09',
    clockIn: '-',
    clockOut: '-',
    totalHours: '0h',
    status: 'absent'
  }
])

const selectedMonth = ref('February 2024')
const selectedStatus = ref('all')

const filteredHistory = computed(() => {
  return attendanceHistory.value.filter(record => {
    if (selectedStatus.value === 'all') return true
    return record.status === selectedStatus.value
  })
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="border-b bg-card/50 backdrop-blur-sm">
      <div class="container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-foreground font-display mb-2">Attendance History</h1>
            <p class="text-muted-foreground">View your complete attendance records</p>
          </div>
          <button class="btn-yellow hover-lift">
            <Download class="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="container mx-auto px-6 py-6">
      <div class="card-elevated p-6">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <label class="block text-sm font-medium mb-2">Month</label>
            <select v-model="selectedMonth" class="w-full border border-border rounded-xl px-4 py-3 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>February 2024</option>
              <option>January 2024</option>
              <option>December 2023</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium mb-2">Status</label>
            <select v-model="selectedStatus" class="w-full border border-border rounded-xl px-4 py-3 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="all">All Status</option>
              <option value="present">Present</option>
              <option value="late">Late</option>
              <option value="absent">Absent</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="btn-accent hover-lift">
              <Filter class="w-4 h-4 mr-2 inline" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- History Table -->
    <div class="container mx-auto px-6 pb-8">
      <div class="card-elevated overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-muted/50 border-b border-border">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Clock In</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Clock Out</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Total Hours</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr 
                v-for="record in filteredHistory" 
                :key="record.id"
                class="hover:bg-accent/30 transition-colors"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <CalendarDays class="w-4 h-4 text-muted-foreground" />
                    <span class="font-medium">{{ record.date }}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-muted-foreground">{{ record.clockIn }}</td>
                <td class="px-6 py-4 text-muted-foreground">{{ record.clockOut }}</td>
                <td class="px-6 py-4">
                  <span class="font-medium">{{ record.totalHours }}</span>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 text-sm font-medium rounded-full" :class="{
                    'bg-gradient-to-r from-green-500 to-green-600 text-white': record.status === 'present',
                    'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white': record.status === 'late',
                    'bg-gradient-to-r from-red-500 to-red-600 text-white': record.status === 'absent'
                  }">
                    {{ record.status.charAt(0).toUpperCase() + record.status.slice(1) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div v-if="filteredHistory.length === 0" class="text-center py-12">
          <div class="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
            <CalendarDays class="w-8 h-8 text-muted-foreground" />
          </div>
          <p class="text-muted-foreground text-lg">No attendance records found for the selected filters.</p>
        </div>
      </div>
    </div>
  </div>
</template>
