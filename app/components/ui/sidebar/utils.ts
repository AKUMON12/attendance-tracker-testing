import { inject, provide, ref, computed, type InjectionKey, type Ref, type ComputedRef } from 'vue'

// 1. Define the Shape of your Sidebar Context
export interface SidebarContext {
    state: ComputedRef<'expanded' | 'collapsed'>
    open: Ref<boolean>
    setOpen: (val: boolean) => void
    isMobile: Ref<boolean>
    toggleSidebar: () => void
}

// 2. Create a Type-Safe Injection Key
export const SidebarKey = Symbol() as InjectionKey<SidebarContext>

// 3. The useSidebar Composable
export const useSidebar = () => {
    const context = inject(SidebarKey)
    if (!context) throw new Error('useSidebar must be used within a SidebarProvider')
    return context
}