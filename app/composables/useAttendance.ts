// app/composables/useAttendance.ts

export interface AttendanceRecord {
    id: string
    userId: string
    date: string
    clockIn: string | null
    clockOut: string | null
    totalHours: number | null
    status: 'present' | 'absent' | 'late' | 'early_leave'
    notes?: string
}

interface AttendanceState {
    isClockedIn: boolean
    clockInTime: string | null
    todayRecord: AttendanceRecord | null
    weeklyRecords: AttendanceRecord[]
    totalHoursToday: number
    totalHoursWeek: number
}

export const useAttendance = () => {
    // Shared state across app (SSR-safe)
    const state = useState<AttendanceState>('attendance_state', () => ({
        isClockedIn: false,
        clockInTime: null,
        todayRecord: null,
        weeklyRecords: [],
        totalHoursToday: 0,
        totalHoursWeek: 0
    }))

    const isLoading = useState<boolean>('attendance_loading', () => false)
    const error = useState<string | null>('attendance_error', () => null)

    /** Clock in */
    const clockIn = async () => {
        isLoading.value = true
        error.value = null
        try {
            // Example API call (replace with real one)
            // await $fetch('/api/attendance/clock-in', { method: 'POST' })

            await new Promise(resolve => setTimeout(resolve, 500))

            const now = new Date().toISOString()
            state.value = {
                ...state.value,
                isClockedIn: true,
                clockInTime: now,
                todayRecord: {
                    id: Date.now().toString(),
                    userId: '1',
                    date: new Date().toISOString().split('T')[0],
                    clockIn: now,
                    clockOut: null,
                    totalHours: null,
                    status: 'present'
                }
            }
        } catch {
            error.value = 'Failed to clock in. Please try again.'
        } finally {
            isLoading.value = false
        }
    }

    /** Clock out */
    const clockOut = async () => {
        isLoading.value = true
        error.value = null
        try {
            // Example API call
            // await $fetch('/api/attendance/clock-out', { method: 'PATCH' })

            await new Promise(resolve => setTimeout(resolve, 500))

            const now = new Date()
            const clockInTime = state.value.clockInTime ? new Date(state.value.clockInTime) : now
            const hoursWorked = (now.getTime() - clockInTime.getTime()) / (1000 * 60 * 60)

            state.value = {
                ...state.value,
                isClockedIn: false,
                clockInTime: null,
                totalHoursToday: state.value.totalHoursToday + hoursWorked,
                todayRecord: state.value.todayRecord
                    ? {
                        ...state.value.todayRecord,
                        clockOut: now.toISOString(),
                        totalHours: hoursWorked
                    }
                    : null
            }
        } catch {
            error.value = 'Failed to clock out. Please try again.'
        } finally {
            isLoading.value = false
        }
    }

    /** Request correction */
    const requestCorrection = async (
        recordId: string,
        correctedClockIn: string,
        correctedClockOut: string,
        reason: string
    ) => {
        isLoading.value = true
        error.value = null
        try {
            // Example API call
            // await $fetch('/api/attendance/request-correction', {
            //   method: 'POST',
            //   body: { recordId, correctedClockIn, correctedClockOut, reason }
            // })

            await new Promise(resolve => setTimeout(resolve, 500))
        } catch {
            error.value = 'Failed to submit correction request.'
        } finally {
            isLoading.value = false
        }
    }

    /** Fetch history */
    const fetchHistory = async (startDate?: string, endDate?: string) => {
        isLoading.value = true
        try {
            // Example API call
            // const records = await $fetch('/api/attendance/history', { params: { startDate, endDate } })

            await new Promise(resolve => setTimeout(resolve, 500))

            const mockRecords: AttendanceRecord[] = Array.from({ length: 5 }, (_, i) => {
                const date = new Date()
                date.setDate(date.getDate() - i)
                return {
                    id: (i + 1).toString(),
                    userId: '1',
                    date: date.toISOString().split('T')[0],
                    clockIn: new Date(date.setHours(9, 0, 0)).toISOString(),
                    clockOut: new Date(date.setHours(17, 30, 0)).toISOString(),
                    totalHours: 8.5,
                    status: 'present'
                }
            })

            state.value = {
                ...state.value,
                weeklyRecords: mockRecords,
                totalHoursWeek: mockRecords.reduce((sum, r) => sum + (r.totalHours || 0), 0)
            }
        } catch {
            error.value = 'Failed to fetch attendance history.'
        } finally {
            isLoading.value = false
        }
    }

    return {
        ...toRefs(state.value),
        isLoading,
        error,
        clockIn,
        clockOut,
        requestCorrection,
        fetchHistory
    }
}
