```
attendance-tracker
├── app/                      <-- EVERYTHING FROM YOUR REACT /src LIVES HERE
│   ├── assets/               # Move App.css, index.css, and images here
│   ├── components/           # Nuxt auto-imports anything here
│   │   ├── attendance/       # Move AttendanceTable.vue, ClockButton.vue
│   │   ├── layout/           # Move AppHeader.vue, AppSidebar.vue
│   │   └── ui/               # Shadcn components (Button.vue, Card.vue, etc.)
│   ├── composables/          # RENAME 'hooks'. Move useAuth.ts, useAttendance.ts
│   ├── layouts/              # Move AuthLayout.vue, DashboardLayout.vue
│   ├── middleware/           # Move ProtectedRoute.tsx logic here as 'auth.ts'
│   ├── pages/                # Move your pages here (Nuxt handles routing)
│   │   ├── admin/            # Nested routes: admin/dashboard.vue
│   │   ├── attendance.vue    # attendance.vue
│   │   ├── index.vue         # Your landing page
│   │   ├── login.vue         # login.vue
│   │   └── register.vue      # register.vue
│   ├── utils/                # Move lib/utils.ts here
│   └── app.vue               # Your main entry point (React's App.tsx)
├── public/                   # Directly move your public folder files here
├── server/                   # YOUR BACKEND (Already perfect)
│   ├── api/                  # Nitro API routes
│   ├── models/               # Mongoose schemas
│   ├── plugins/              # MongoDB connection
│   └── utils/                # Server-side helpers
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration
└── ...
```
