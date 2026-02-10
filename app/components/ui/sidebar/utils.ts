// Example of how the logic translates to Vue
import { inject, provide, ref, computed } from 'vue'

export const useSidebar = () => {
    const context = inject('sidebar-context')
    if (!context) throw new Error('useSidebar must be used within a SidebarProvider')
    return context
}

// In the SidebarProvider.vue component:
const open = ref(true)
const isMobile = useIsMobile() // Your existing mobile composable

const state = computed(() => open.value ? 'expanded' : 'collapsed')

const toggleSidebar = () => {
    open.value = !open.value
}

provide('sidebar-context', {
    state,
    open,
    setOpen: (val) => open.value = val,
    isMobile,
    toggleSidebar
})