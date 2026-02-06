// app/composables/useAdmin.ts

export interface UserStatus {
    id: string
    name: string
    email: string
    status: 'online' | 'offline' | 'on_break'
    clockedInAt: string | null
    totalHoursToday: number
    warnings: number
}

export interface AdminStats {
    totalUsers: number
    activeToday: number
    onBreak: number
    averageHours: number
    lateArrivals: number
    pendingCorrections: number
}

export const useAdmin = () => {
    // Shared state across app (SSR-safe)
    const users = useState<UserStatus[]>('admin_users', () => [])
    const stats = useState<AdminStats | null>('admin_stats', () => null)
    const isLoading = useState<boolean>('admin_loading', () => false)
    const error = useState<string | null>('admin_error', () => null)

    /** Fetch all users' status */
    const fetchUsersStatus = async () => {
        isLoading.value = true
        try {
            // Example API call (replace with real one)
            // const data = await $fetch<UserStatus[]>('/api/admin/users/status')

            await new Promise(resolve => setTimeout(resolve, 500))

            const mockUsers: UserStatus[] = [
                { id: '1', name: 'John Doe', email: 'john@example.com', status: 'online', clockedInAt: new Date().toISOString(), totalHoursToday: 4.5, warnings: 0 },
                { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'online', clockedInAt: new Date().toISOString(), totalHoursToday: 5.2, warnings: 1 },
                { id: '3', name: 'Bob Wilson', email: 'bob@example.com', status: 'on_break', clockedInAt: new Date().toISOString(), totalHoursToday: 3.8, warnings: 0 },
                { id: '4', name: 'Alice Brown', email: 'alice@example.com', status: 'offline', clockedInAt: null, totalHoursToday: 0, warnings: 2 },
                { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', status: 'online', clockedInAt: new Date().toISOString(), totalHoursToday: 6.1, warnings: 0 }
            ]

            users.value = mockUsers
        } catch {
            error.value = 'Failed to fetch users status.'
        } finally {
            isLoading.value = false
        }
    }

    /** Fetch admin stats */
    const fetchStats = async () => {
        isLoading.value = true
        try {
            // Example API call
            // const data = await $fetch<AdminStats>('/api/admin/stats')

            await new Promise(resolve => setTimeout(resolve, 500))

            const mockStats: AdminStats = {
                totalUsers: 25,
                activeToday: 18,
                onBreak: 3,
                averageHours: 7.2,
                lateArrivals: 2,
                pendingCorrections: 5
            }

            stats.value = mockStats
        } catch {
            error.value = 'Failed to fetch stats.'
        } finally {
            isLoading.value = false
        }
    }

    /** Issue a warning to a user */
    const issueWarning = async (userId: string, reason: string) => {
        isLoading.value = true
        try {
            // Example API call
            // await $fetch('/api/admin/users/warning', { method: 'PATCH', body: { userId, reason } })

            await new Promise(resolve => setTimeout(resolve, 500))

            users.value = users.value.map(u =>
                u.id === userId ? { ...u, warnings: u.warnings + 1 } : u
            )
        } catch {
            error.value = 'Failed to issue warning.'
        } finally {
            isLoading.value = false
        }
    }

    /** Sync payroll data */
    const syncPayroll = async () => {
        isLoading.value = true
        try {
            // Example API call
            // await $fetch('/api/admin/payroll-sync', { method: 'POST' })

            await new Promise(resolve => setTimeout(resolve, 1000))
            // Payroll synced successfully
        } catch {
            error.value = 'Failed to sync payroll.'
        } finally {
            isLoading.value = false
        }
    }

    /** Generate reports */
    const generateReport = async (type: 'daily' | 'weekly' | 'monthly', startDate: string, endDate: string) => {
        isLoading.value = true
        try {
            // Example API call
            // const data = await $fetch(`/api/admin/reports?type=${type}&start=${startDate}&end=${endDate}`)

            await new Promise(resolve => setTimeout(resolve, 1000))
            return { success: true, data: [] }
        } catch {
            error.value = 'Failed to generate report.'
            return null
        } finally {
            isLoading.value = false
        }
    }

    return {
        users,
        stats,
        isLoading,
        error,
        fetchUsersStatus,
        fetchStats,
        issueWarning,
        syncPayroll,
        generateReport
    }
}
