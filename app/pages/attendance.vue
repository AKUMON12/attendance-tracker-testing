<script setup lang="ts">
import { Clock, FileEdit } from 'lucide-vue-next'
import { useNow, useDateFormat } from '@vueuse/core'

// We removed all manual imports for Card, Dialog, Button, etc.
// Nuxt will auto-import them as <Card>, <Dialog>, etc.

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

onMounted(() => {
  fetchHistory()
})

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