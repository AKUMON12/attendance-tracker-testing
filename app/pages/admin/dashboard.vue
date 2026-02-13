<script setup lang="ts">
import { 
  Users, Clock, AlertTriangle, BarChart3, 
  Coffee, TrendingUp, FileText, RefreshCw 
} from 'lucide-vue-next'
// We only import the 'cn' utility and the composable. 
// UI Components are auto-imported by Nuxt!
import { cn } from '@/lib/utils' 

definePageMeta({
  layout: 'dashboard-layout'
})

const { 
  users, 
  stats, 
  isLoading,
  fetchUsersStatus,
  fetchStats,
  issueWarning,
  syncPayroll,
} = useAdmin()

const isSyncing = ref(false)

// Fetch data when component loads
fetchUsersStatus()
fetchStats()

const handleSyncPayroll = async () => {
  isSyncing.value = true
  try {
    await syncPayroll()
  } finally {
    isSyncing.value = false
  }
}

const getStatusConfig = (status: 'online' | 'offline' | 'on_break') => {
  const configs = {
    online: {
      class: 'bg-green-500/10 text-green-500 border-green-500/20',
      dot: 'bg-green-500',
      label: 'Online'
    },
    offline: {
      class: 'bg-muted text-muted-foreground border-muted',
      dot: 'bg-muted-foreground',
      label: 'Offline'
    },
    on_break: {
      class: 'bg-accent/10 text-accent-foreground border-accent/20',
      dot: 'bg-accent',
      label: 'On Break'
    }
  }
  return configs[status] || configs.offline
}
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-500">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-display font-bold text-gradient-accent">
          Admin Dashboard
        </h1>
        <p class="text-muted-foreground mt-1">
          Monitor team attendance and manage operations
        </p>
      </div>
      <div class="flex gap-3">
        <Button variant="outline" @click="() => { fetchUsersStatus(); fetchStats(); }">
          <RefreshCw :class="cn('w-4 h-4 mr-2', isLoading && 'animate-spin')" />
          Refresh
        </Button>
        <Button 
          class="gradient-accent text-white"
          @click="handleSyncPayroll"
          :disabled="isSyncing"
        >
          <FileText class="w-4 h-4 mr-2" />
          {{ isSyncing ? 'Syncing...' : 'Sync Payroll' }}
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      <StatCard
        title="Total Users"
        :value="stats?.totalUsers || 0"
        :icon="Users"
        variant="primary"
      />
      <StatCard
        title="Active Today"
        :value="stats?.activeToday || 0"
        :icon="Clock"
        variant="secondary"
      />
      <StatCard
        title="On Break"
        :value="stats?.onBreak || 0"
        :icon="Coffee"
        variant="accent"
      />
      <StatCard
        title="Avg Hours"
        :value="`${stats?.averageHours?.toFixed(1) || 0}h`"
        :icon="TrendingUp"
      />
      <StatCard
        title="Late Arrivals"
        :value="stats?.lateArrivals || 0"
        :icon="AlertTriangle"
      />
      <StatCard
        title="Pending"
        :value="stats?.pendingCorrections || 0"
        :icon="BarChart3"
      />
    </div>

    <Card>
      <CardHeader>
        <CardTitle class="text-lg font-display flex items-center gap-2">
          <Users class="w-5 h-5 text-secondary" />
          Team Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow class="bg-muted/50">
                <TableHead class="font-medium">Employee</TableHead>
                <TableHead class="font-medium">Status</TableHead>
                <TableHead class="font-medium">Clocked In</TableHead>
                <TableHead class="font-medium">Hours Today</TableHead>
                <TableHead class="font-medium">Warnings</TableHead>
                <TableHead class="font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="user in users" :key="user.id" class="hover:bg-muted/30 transition-colors">
                <TableCell>
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                      <span class="text-sm font-medium text-white">
                        {{ user.name.charAt(0) }}
                      </span>
                    </div>
                    <div>
                      <p class="font-medium">{{ user.name }}</p>
                      <p class="text-xs text-muted-foreground">{{ user.email }}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" :class="cn('capitalize', getStatusConfig(user.status).class)">
                    <span :class="cn('w-2 h-2 rounded-full mr-2', getStatusConfig(user.status).dot)" />
                    {{ getStatusConfig(user.status).label }}
                  </Badge>
                </TableCell>
                <TableCell>
                  {{ user.clockedInAt 
                    ? new Date(user.clockedInAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) 
                    : '—' 
                  }}
                </TableCell>
                <TableCell class="font-medium text-primary">
                  {{ user.totalHoursToday.toFixed(1) }}h
                </TableCell>
                <TableCell>
                  <Badge v-if="user.warnings > 0" variant="destructive" class="bg-destructive/10 text-destructive border-destructive/20">
                    {{ user.warnings }} warning{{ user.warnings > 1 ? 's' : '' }}
                  </Badge>
                  <span v-else class="text-muted-foreground">None</span>
                </TableCell>
                <TableCell class="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    @click="issueWarning(user.id, 'Manual warning')"
                    class="text-muted-foreground hover:text-destructive"
                  >
                    Issue Warning
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>