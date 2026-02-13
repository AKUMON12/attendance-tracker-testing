<script setup lang="ts">
import { Clock, FileEdit } from 'lucide-vue-next'
import { useNow, useDateFormat } from '@vueuse/core'

definePageMeta({
  layout: 'dashboard-layout'
})

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

const correctionModal = ref(false)
const selectedRecord = ref<any>(null)
const correctedClockIn = ref('')
const correctedClockOut = ref('')
const reason = ref('')

const now = useNow()
const formattedDate = useDateFormat(now, 'dddd, MMMM D, YYYY')
const formattedTime = useDateFormat(now, 'hh:mm:ss A')

fetchHistory()

const handleRequestCorrection = (record: any) => {
  selectedRecord.value = record
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
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <div class="border-b bg-card/50 backdrop-blur-sm">
      <div class="container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-foreground font-display mb-2">Attendance Tracking</h1>
            <p class="text-muted-foreground">{{ formattedDate }}</p>
          </div>
          <div class="text-right">
            <p class="text-3xl font-mono text-gradient-primary font-semibold">{{ formattedTime }}</p>
            <p class="text-sm text-muted-foreground">Current Time</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-8">
      <!-- Clock In/Out Card -->
      <div class="card-elevated p-8 mb-8 bg-gradient-to-br from-card to-card/50">
        <div class="text-center">
          <div class="mb-8">
            <div class="w-32 h-32 mx-auto rounded-3xl gradient-brand flex items-center justify-center glow-blue shadow-2xl hover-lift">
              <Clock class="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h2 class="text-3xl font-bold text-foreground mb-4 font-display">
            <span :class="isClockedIn ? 'text-gradient-accent' : 'text-muted-foreground'">
              {{ isClockedIn ? 'Clocked In' : 'Clocked Out' }}
            </span>
          </h2>
          
          <p v-if="isClockedIn && clockInTime" class="text-muted-foreground mb-8 text-lg">
            Since {{ clockInTime }}
          </p>

          <div class="flex justify-center gap-4">
            <button 
              v-if="!isClockedIn" 
              @click="clockIn" 
              :disabled="isLoading"
              class="btn-yellow px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl"
            >
              <Clock class="w-5 h-5 mr-2 inline" />
              Clock In
            </button>
            
            <button 
              v-else 
              @click="clockOut" 
              :disabled="isLoading"
              class="bg-gradient-to-r from-destructive to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Clock class="w-5 h-5 mr-2 inline" />
              Clock Out
            </button>
          </div>
        </div>
      </div>

      <!-- Weekly Records -->
      <div class="card-elevated p-6">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-semibold text-foreground font-display">Weekly Records</h2>
          <button class="btn-accent hover-lift">
            <FileEdit class="w-4 h-4 mr-2 inline" />
            Export
          </button>
        </div>

        <div v-if="isLoading" class="text-center py-12">
          <div class="w-12 h-12 animate-spin mx-auto text-primary mb-4">⟳</div>
          <p class="text-muted-foreground text-lg">Loading attendance records...</p>
        </div>

        <div v-else-if="weeklyRecords.length === 0" class="text-center py-12">
          <div class="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
            <Clock class="w-8 h-8 text-muted-foreground" />
          </div>
          <p class="text-muted-foreground text-lg">No attendance records found for this week.</p>
        </div>

        <div v-else class="space-y-4">
          <div 
            v-for="record in weeklyRecords" 
            :key="record.id"
            class="flex items-center justify-between p-6 border border-border rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card/50"
          >
            <div class="flex items-center gap-4">
              <div class="w-4 h-4 rounded-full" :class="{
                'bg-gradient-to-r from-green-400 to-green-600': record.status === 'present',
                'bg-gradient-to-r from-yellow-400 to-yellow-600': record.status === 'late',
                'bg-gradient-to-r from-red-400 to-red-600': record.status === 'absent'
              }"></div>
              <div>
                <p class="font-semibold text-foreground text-lg">{{ record.date }}</p>
                <p class="text-sm text-muted-foreground">
                  {{ record.clockIn || 'No clock in' }} - {{ record.clockOut || 'No clock out' }}
                </p>
              </div>
            </div>
            
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 text-sm font-medium rounded-full" :class="{
                'bg-gradient-to-r from-green-500 to-green-600 text-white': record.status === 'present',
                'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white': record.status === 'late',
                'bg-gradient-to-r from-red-500 to-red-600 text-white': record.status === 'absent'
              }">
                {{ record.status }}
              </span>
              
              <button 
                class="p-3 border border-border rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                @click="handleRequestCorrection(record)"
              >
                <FileEdit class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modern Correction Modal -->
    <div v-if="correctionModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="card-glass w-full max-w-md animate-in scale-in duration-300">
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-4 font-display text-gradient-primary">Request Correction</h3>
          <p class="text-sm text-muted-foreground mb-6">
            Make changes to your attendance record. Your request will be reviewed by an administrator.
          </p>
          
          <div class="space-y-4 mb-6">
            <div>
              <label class="block text-sm font-medium mb-2">Clock In</label>
              <input v-model="correctedClockIn" class="w-full border border-border rounded-xl px-4 py-3 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Clock Out</label>
              <input v-model="correctedClockOut" class="w-full border border-border rounded-xl px-4 py-3 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Reason</label>
              <textarea v-model="reason" placeholder="Explain why you need this correction..." class="w-full border border-border rounded-xl px-4 py-3 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"></textarea>
            </div>
          </div>
          
          <div class="flex gap-3">
            <button 
              @click="correctionModal = false"
              class="flex-1 bg-secondary text-secondary-foreground rounded-xl px-4 py-3 font-medium hover:bg-secondary/80 transition-colors"
            >
              Cancel
            </button>
            <button 
              @click="handleSubmitCorrection"
              class="flex-1 btn-primary font-medium"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>