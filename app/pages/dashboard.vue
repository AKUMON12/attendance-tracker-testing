<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const { user, isAuthenticated } = useAuth()

// Sample data for dashboard
const stats = ref([
  {
    title: 'Total Attendance',
    value: '24',
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'This Week',
    value: '18',
    change: '+5%',
    trend: 'up'
  },
  {
    title: 'Attendance Rate',
    value: '92%',
    change: '+2%',
    trend: 'up'
  },
  {
    title: 'Classes',
    value: '6',
    change: '0%',
    trend: 'neutral'
  }
])

const recentAttendance = ref([
  {
    date: '2024-01-15',
    class: 'Mathematics',
    status: 'present',
    time: '9:00 AM'
  },
  {
    date: '2024-01-14',
    class: 'Physics',
    status: 'present',
    time: '10:30 AM'
  },
  {
    date: '2024-01-13',
    class: 'Chemistry',
    status: 'absent',
    time: '2:00 PM'
  }
])
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="border-b bg-card">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-foreground">
              Welcome back, {{ user?.name || 'User' }}!
            </h1>
            <p class="text-muted-foreground mt-1">
              Here's your attendance overview
            </p>
          </div>
          <div class="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar class="w-4 h-4 mr-2" />
              View Calendar
            </Button>
            <Button size="sm">
              <Plus class="w-4 h-4 mr-2" />
              Mark Attendance
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card v-for="stat in stats" :key="stat.title" class="p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-muted-foreground">{{ stat.title }}</p>
              <p class="text-2xl font-bold text-foreground mt-1">{{ stat.value }}</p>
            </div>
            <div class="flex items-center gap-1 text-sm">
              <TrendingUp v-if="stat.trend === 'up'" class="w-4 h-4 text-green-500" />
              <TrendingDown v-else-if="stat.trend === 'down'" class="w-4 h-4 text-red-500" />
              <Minus v-else class="w-4 h-4 text-muted-foreground" />
              <span :class="{
                'text-green-500': stat.trend === 'up',
                'text-red-500': stat.trend === 'down',
                'text-muted-foreground': stat.trend === 'neutral'
              }">
                {{ stat.change }}
              </span>
            </div>
          </div>
        </Card>
      </div>

      <!-- Recent Attendance -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <Card class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-semibold text-foreground">Recent Attendance</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div class="space-y-4">
              <div v-for="record in recentAttendance" :key="record.date" class="flex items-center justify-between p-4 border rounded-lg">
                <div class="flex items-center gap-4">
                  <div class="w-2 h-2 rounded-full" :class="{
                    'bg-green-500': record.status === 'present',
                    'bg-red-500': record.status === 'absent'
                  }"></div>
                  <div>
                    <p class="font-medium text-foreground">{{ record.class }}</p>
                    <p class="text-sm text-muted-foreground">{{ record.date }} at {{ record.time }}</p>
                  </div>
                </div>
                <Badge :variant="record.status === 'present' ? 'default' : 'destructive'">
                  {{ record.status }}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        <!-- Quick Actions -->
        <div>
          <Card class="p-6">
            <h2 class="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div class="space-y-3">
              <Button class="w-full justify-start" variant="outline">
                <Clock class="w-4 h-4 mr-2" />
                Mark Today's Attendance
              </Button>
              <Button class="w-full justify-start" variant="outline">
                <FileText class="w-4 h-4 mr-2" />
                View Reports
              </Button>
              <Button class="w-full justify-start" variant="outline">
                <Settings class="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button class="w-full justify-start" variant="outline">
                <HelpCircle class="w-4 h-4 mr-2" />
                Help & Support
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
