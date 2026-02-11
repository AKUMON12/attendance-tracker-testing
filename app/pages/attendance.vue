<script setup lang="ts">
import { Clock, FileEdit } from 'lucide-vue-next'
import { useNow, useDateFormat } from '@vueuse/core'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// Use the Dashboard layout for sidebar/header
definePageMeta({
  layout: 'dashboard-layout'
})

// Attendance Logic from your composable
const {
  isClockedIn,
  clockInTime,
  weeklyRecords,
  isLoading,
  clockIn,
  clockOut,
  fetchHistory,
  requestCorrection,
} = useAttendance()

const { addToast } = useToast()

// Reactive UI State
const correctionModal = ref(false)
const selectedRecord = ref<any>(null)
const correctedClockIn = ref('')
const correctedClockOut = ref('')
const reason = ref('')

// Clock logic using VueUse (auto-updates every second)
const now = useNow()
const formattedDate = useDateFormat(now, 'dddd, MMMM D, YYYY')
const formattedTime = useDateFormat(now, 'hh:mm:ss A')

// Fetch history on mount
onMounted(() => {
  fetchHistory()
})

const handleRequestCorrection = (record: any) => {
  selectedRecord.value = record
  // Extract time string HH:mm from ISO or date string
  correctedClockIn.value = record.clockIn?.split('T')[1]?.substring(0, 5) || '09:00'
  correctedClockOut.value = record.clockOut?.split('T')[1]?.substring(0, 5) || '17:00'
  reason.value = ''
  correctionModal.value = true
}

const handleSubmitCorrection = async () => {
  if (!selectedRecord.value || !reason.value.trim()) {
    addToast({
      title: 'Error',
      description: 'Please provide a reason for the correction',
      variant: 'destructive',
    })
    return
  }

  try {
    await requestCorrection(
      selectedRecord.value.id,
      correctedClockIn.value,
      correctedClockOut.value,
      reason.value
    )

    addToast({
      title: 'Correction Requested',
      description: 'Your correction request has been submitted for review.',
    })

    correctionModal.value = false
    selectedRecord.value = null
  } catch (err: any) {
    addToast({
      title: 'Request Failed',
      description: err.message || 'Could not submit correction.',
      variant: 'destructive'
    })
  }
}
</script>

<template>
  <div class="space-y-8 animate-in fade-in duration-500">
    <div>
      <h1 class="text-3xl font-display font-bold">
        <span class="text-gradient-primary">Attendance</span>
      </h1>
      <p class="text-muted-foreground mt-1">
        Clock in/out and view your attendance history
      </p>
    </div>

    <Card class="glass-card border-muted">
      <CardContent class="flex flex-col items-center justify-center py-12">
        <div class="mb-4 flex items-center gap-2 text-muted-foreground">
          <Clock class="w-5 h-5" />
          <span class="text-lg">{{ formattedDate }}</span>
        </div>
        <div class="text-5xl font-display font-bold mb-8">
          {{ formattedTime }}
        </div>
        
        <AttendanceClockButton
          :is-clocked-in="isClockedIn"
          :is-loading="isLoading"
          :clock-in-time="clockInTime"
          @clock-in="clockIn"
          @clock-out="clockOut"
        />
      </CardContent>
    </Card>

    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <CardTitle class="text-lg font-display flex items-center gap-2">
          <FileEdit class="w-5 h-5 text-primary" />
          Attendance History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AttendanceTable
          :records="weeklyRecords"
          :show-actions="true"
          @request-correction="handleRequestCorrection"
        />
      </CardContent>
    </Card>

    <Dialog v-model:open="correctionModal">
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle class="font-display">Request Time Correction</DialogTitle>
          <DialogDescription>
            Submit a correction request for {{ selectedRecord?.date }}
          </DialogDescription>
        </DialogHeader>
        
        <div class="space-y-4 py-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="clockIn">Corrected Clock In</Label>
              <Input
                id="clockIn"
                v-model="correctedClockIn"
                type="time"
              />
            </div>
            <div class="space-y-2">
              <Label for="clockOut">Corrected Clock Out</Label>
              <Input
                id="clockOut"
                v-model="correctedClockOut"
                type="time"
              />
            </div>
          </div>
          <div class="space-y-2">
            <Label for="reason">Reason for Correction</Label>
            <Textarea
              id="reason"
              v-model="reason"
              placeholder="Please explain why this correction is needed..."
              :rows="3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" @click="correctionModal = false">
            Cancel
          </Button>
          <Button 
            class="gradient-primary text-white"
            :disabled="isLoading"
            @click="handleSubmitCorrection"
          >
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>