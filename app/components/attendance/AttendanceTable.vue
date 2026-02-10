<script setup lang="ts">
import { format } from "date-fns"
// No need to import Table, Badge, Button, or Clock - Nuxt auto-imports these!
import { cn } from "@/lib/utils"

interface AttendanceRecord {
  id: string
  date: string
  clockIn: string | null
  clockOut: string | null
  totalHours: number | null
  status: "present" | "absent" | "late" | "early_leave"
}

interface AttendanceTableProps {
  records: AttendanceRecord[]
  showActions?: boolean
}

const props = defineProps<AttendanceTableProps>()
const emit = defineEmits<{
  (e: "requestCorrection", record: AttendanceRecord): void
}>()

// We return the labels and styles instead of JSX
const statusConfig: Record<AttendanceRecord["status"], { label: string; class: string }> = {
  present: { label: "Present", class: "bg-green-500/10 text-green-500 border-green-500/20" },
  absent: { label: "Absent", class: "bg-destructive/10 text-destructive border-destructive/20" },
  late: { label: "Late", class: "bg-accent/10 text-accent-foreground border-accent/20" },
  early_leave: { label: "Early Leave", class: "bg-secondary/10 text-secondary border-secondary/20" },
}

function formatTime(isoString: string | null) {
  if (!isoString) return "—"
  return format(new Date(isoString), "hh:mm a")
}

function formatDate(dateString: string) {
  return format(new Date(dateString), "EEE, MMM d")
}

function formatHours(hours: number | null) {
  if (hours === null) return "—"
  return `${hours.toFixed(1)}h`
}
</script>

<template>
  <div v-if="props.records.length === 0" class="flex flex-col items-center justify-center py-12 text-center">
    <LucideClock class="w-12 h-12 text-muted-foreground mb-4" />
    <h3 class="text-lg font-medium">No attendance records</h3>
    <p class="text-sm text-muted-foreground">Your attendance history will appear here</p>
  </div>

  <div v-else class="rounded-xl border border-border overflow-hidden">
    <Table>
      <TableHeader>
        <TableRow class="bg-muted/50">
          <TableHead class="font-medium">Date</TableHead>
          <TableHead class="font-medium">Clock In</TableHead>
          <TableHead class="font-medium">Clock Out</TableHead>
          <TableHead class="font-medium">Hours</TableHead>
          <TableHead class="font-medium">Status</TableHead>
          <TableHead v-if="props.showActions" class="font-medium text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="record in props.records" :key="record.id" class="hover:bg-muted/30 transition-colors">
          <TableCell class="font-medium">{{ formatDate(record.date) }}</TableCell>
          <TableCell>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500" />
              {{ formatTime(record.clockIn) }}
            </div>
          </TableCell>
          <TableCell>
            <div class="flex items-center gap-2">
              <div :class="cn('w-2 h-2 rounded-full', record.clockOut ? 'bg-secondary' : 'bg-muted')" />
              {{ formatTime(record.clockOut) }}
            </div>
          </TableCell>
          <TableCell class="font-medium text-primary">{{ formatHours(record.totalHours) }}</TableCell>
          <TableCell>
            <Badge variant="outline" :class="cn('capitalize', statusConfig[record.status].class)">
              {{ statusConfig[record.status].label }}
            </Badge>
          </TableCell>
          <TableCell v-if="props.showActions" class="text-right">
            <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground" @click="emit('requestCorrection', record)">
              Request Edit
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>