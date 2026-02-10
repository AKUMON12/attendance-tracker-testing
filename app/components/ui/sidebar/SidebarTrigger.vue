import { inject, provide, ref, computed, defineComponent, h, type PropType, type HTMLAttributes } from 'vue'
import { useElementSize, useWindowSize, useEventListener } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

/* ===============================
    Constants & Types
   =============================== */
const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

export type SidebarContext = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

/* ===============================
    Composable (useSidebar)
   =============================== */
export const SidebarInjectionKey = Symbol('SidebarContext')

export function useSidebar() {
  const context = inject<SidebarContext>(SidebarInjectionKey)
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}

/* ===============================
    SidebarProvider
   =============================== */
export const SidebarProvider = defineComponent({
  props: {
    defaultOpen: { type: Boolean, default: true },
    open: { type: Boolean, default: undefined },
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    const isMobile = computed(() => {
      if (typeof window === 'undefined') return false
      return window.innerWidth < 768
    })
    
    const openMobile = ref(false)
    const _open = ref(props.defaultOpen)
    const open = computed(() => props.open !== undefined ? props.open : _open.value)

    const setOpen = (value: boolean) => {
      _open.value = value
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    }

    const toggleSidebar = () => {
      return isMobile.value 
        ? (openMobile.value = !openMobile.value) 
        : setOpen(!open.value)
    }

    useEventListener('keydown', (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
      }
    })

    const state = computed(() => open.value ? "expanded" : "collapsed")

    provide(SidebarInjectionKey, {
      state: state.value,
      open: open.value,
      setOpen,
      isMobile: isMobile.value,
      openMobile: openMobile.value,
      setOpenMobile: (val: boolean) => openMobile.value = val,
      toggleSidebar
    })

    return () => h('div', {
      style: { "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON },
      class: cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", props.class)
    }, slots.default?.())
  }
})

/* ===============================
    Sidebar Menu Button Variants
   =============================== */
export const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/* ===============================
    Helper Components (Static)
   =============================== */
export const SidebarHeader = defineComponent({
  render() { return h('div', { 'data-sidebar': 'header', class: cn("flex flex-col gap-2 p-2", this.$attrs.class as string) }, this.$slots.default?.()) }
})

export const SidebarContent = defineComponent({
  render() { return h('div', { 'data-sidebar': 'content', class: cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", this.$attrs.class as string) }, this.$slots.default?.()) }
})

export const SidebarFooter = defineComponent({
  render() { return h('div', { 'data-sidebar': 'footer', class: cn("flex flex-col gap-2 p-2", this.$attrs.class as string) }, this.$slots.default?.()) }
})

// ... You would continue this pattern for SidebarMenu, SidebarMenuItem, etc.