# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

---

# 🕒 ChronoTrack | Precision Attendance System

**ChronoTrack** is a robust, full-stack attendance management system built with the cutting-edge **Nuxt 4** framework. It provides a secure, high-performance solution for tracking employee work hours, featuring real-time status updates and automated hour calculations.

---

## 🚀 System Overview

This system bridges the gap between administrative oversight and employee accountability. By leveraging **JSON Web Tokens (JWT)**, it ensures that attendance data is authentic and tamper-proof.

### 💎 Key Features

- **Secure Authentication:** Multi-role (Admin/User) login system with `bcrypt` password hashing.
- **Precision Tracking:** Automated "Clock-In" and "Clock-Out" logic that prevents duplicate entries and spoofing.
- **Live Status:** Real-time user status (Present/Absent) synchronization with MongoDB.
- **Smart Analytics:** Automatic calculation of total work hours per shift.
- **Modern Stack:** Powered by Nuxt 4, Nitro, and Mongoose for a seamless developer experience.

---

## 🛠️ Tech Stack

| Layer                  | Technology                                |
| ---------------------- | ----------------------------------------- |
| **Frontend/Framework** | [Nuxt 4](https://nuxt.com/)               |
| **Backend Engine**     | [Nitro](https://nitro.unjs.io/)           |
| **Database**           | [MongoDB Atlas](https://www.mongodb.com/) |
| **ODM**                | [Mongoose](https://mongoosejs.com/)       |
| **Security**           | JWT (jsonwebtoken) & bcryptjs             |

---

## 📂 Project Structure

```text
attendance-tracker/
├── .nuxt/                # Nuxt auto-generated files
├── public/               # Static assets
├── server/               # Nitro Server Engine
│   ├── api/              # API Endpoints
│   │   ├── auth/         # Register & Login logic
│   │   └── attendance/   # Clock-in/out logic
│   ├── models/           # Mongoose Data Schemas (User, Attendance)
│   ├── plugins/          # Nitro Plugins (MongoDB Connection)
│   └── utils/            # Shared logic (JWT Verification)
├── .env                  # Environment Variables (Secrets)
├── nuxt.config.ts        # System configuration
└── package.json          # Dependencies & Scripts

```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/attendance-tracker.git
cd attendance-tracker

```

2. **Install dependencies:**

```bash
npm install

```

3. **Configure Environment Variables:**
   Create a `.env` file in the root and add:

```env
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_custom_secret_key

```

4. **Run in Development Mode:**

```bash
npm run dev

```

---

## 🛡️ API Endpoints Preview

- `POST /api/auth/register` - Create new account.
- `POST /api/auth/login` - Receive JWT access token.
- `POST /api/attendance/clock-in` - Mark start of shift (Requires Token).
- `PATCH /api/attendance/clock-out` - End shift & calculate hours (Requires Token).

---

### 💡 Insight

This architecture follows the **Nuxt 4 Future** directory convention, ensuring the system is scalable and ready for production deployment on platforms like Vercel or Netlify.

---
