export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth()
  
  // If not authenticated and trying to access protected routes
  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})
