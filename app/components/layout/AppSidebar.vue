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

import { useAuth } from "@/composables/useAuth"
import { useRouter } from "vue-router"

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
  <div class="w-72 bg-card/50 backdrop-blur-sm border-r border-border min-h-screen flex flex-col">
    <!-- Header -->
    <div class="p-6 border-b border-border">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center glow-blue shadow-lg">
          <span class="text-xl font-bold text-white font-display">SK</span>
        </div>
        <div>
          <h1 class="font-bold text-xl font-display text-gradient-primary">SKLoud</h1>
          <p class="text-xs text-muted-foreground">Software Development Services</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex-1 p-6">
      <!-- User Menu -->
      <div class="mb-8">
        <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Main Menu
        </h3>
        <nav class="space-y-2">
          <NuxtLink
            v-for="item in userNavItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 w-full group"
            active-class="bg-gradient-to-r from-skloud-blue to-skloud-purple text-white shadow-lg"
            not-active-class="text-muted-foreground hover:text-foreground hover:bg-accent/50"
          >
            <component :is="item.icon" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>

      <!-- Admin Menu -->
      <div v-if="isAdmin">
        <h3 class="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Admin
        </h3>
        <nav class="space-y-2">
          <NuxtLink
            v-for="item in adminNavItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 w-full group"
            active-class="bg-gradient-to-r from-skloud-pink to-skloud-yellow text-white shadow-lg"
            not-active-class="text-muted-foreground hover:text-foreground hover:bg-accent/50"
          >
            <component :is="item.icon" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">{{ item.label }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-6 border-t border-border">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-10 h-10 rounded-full gradient-accent flex items-center justify-center glow-pink">
          <span class="text-sm font-bold text-white">
            {{ user?.name?.charAt(0).toUpperCase() || "U" }}
          </span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold truncate">{{ user?.name || "User" }}</p>
          <p class="text-xs text-muted-foreground truncate">{{ user?.email }}</p>
        </div>
      </div>
      <button
        @click="handleLogout"
        class="flex items-center gap-3 w-full px-4 py-3 text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-2xl transition-all duration-200 group"
      >
        <LogOut class="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span class="font-medium">Logout</span>
      </button>
    </div>
  </div>
</template>