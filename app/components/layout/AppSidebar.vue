<script setup lang="ts">
import {
  Clock,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  BarChart3,
  CalendarDays,
} from "lucide-vue-next"

// REMOVED: Manual Sidebar imports. Nuxt auto-imports these from components/ui/sidebar/
import { useAuth } from "@/composables/useAuth"
import { useRouter } from "vue-router"
import { cn } from "@/lib/utils"

const { user, logout, isAdmin } = useAuth()
const router = useRouter()

function handleLogout() {
  logout()
  router.replace("/login")
}

const userNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: CalendarDays, label: "History", path: "/history" },
]

const adminNavItems = [
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
]
</script>

<template>
  <Sidebar class="border-r border-border">
    <SidebarHeader class="p-4 border-b border-border">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span class="text-lg font-bold text-primary-foreground">SK</span>
        </div>
        <div>
          <h1 class="font-bold text-lg">SKLoud</h1>
          <p class="text-xs text-muted-foreground">Attendance Tracker</p>
        </div>
      </div>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="text-muted-foreground text-xs uppercase tracking-wider">
          Main Menu
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in userNavItems" :key="item.path">
              <SidebarMenuButton as-child>
                <NuxtLink :to="item.path" v-slot="{ isActive }">
                  <div :class="cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 w-full',
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )">
                    <component :is="item.icon" class="w-5 h-5" />
                    <span>{{ item.label }}</span>
                  </div>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup v-if="isAdmin">
        <SidebarGroupLabel class="text-muted-foreground text-xs uppercase tracking-wider">
          Admin
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in adminNavItems" :key="item.path">
              <SidebarMenuButton as-child>
                <NuxtLink :to="item.path" v-slot="{ isActive }">
                  <div :class="cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 w-full',
                    isActive 
                      ? 'bg-secondary/20 text-secondary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )">
                    <component :is="item.icon" class="w-5 h-5" />
                    <span>{{ item.label }}</span>
                  </div>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter class="p-4 border-t border-border">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
          <span class="text-sm font-medium text-white">
            {{ user?.name?.charAt(0).toUpperCase() || "U" }}
          </span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">{{ user?.name || "User" }}</p>
          <p class="text-xs text-muted-foreground truncate">{{ user?.email }}</p>
        </div>
      </div>
      <button
        @click="handleLogout"
        class="flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
      >
        <LogOut class="w-4 h-4" />
        <span>Logout</span>
      </button>
    </SidebarFooter>
  </Sidebar>
</template>