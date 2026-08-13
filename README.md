# Workout Pro

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

Welcome to **Workout Pro**, a daily fitness journal application built to track your workouts, manage split routines, and log notes for individual exercises. 

This project is built as a unified Next.js (TypeScript) application using the App Router.

---

## Features

- **User Authentication**: Secure register and login via JSON Web Tokens (JWT) stored in HTTP-only cookies.
- **Interactive Dashboard**: Select split routines, check off completed exercises, view completion statistics, and add custom notes (sets/reps/weight).
- **Persistent Storage**: Accounts are saved locally in a persistent JSON database (`data/users.json`) so they persist across server restarts.
- **Built-in Splits**: Includes Push/Pull/Legs (PPL), Bro Split, and Upper/Lower (UL) templates.
- **Vanilla CSS Layout**: Sleek responsive design utilizing custom dark mode color systems.

---

## Folder Structure

```text
workout-pro-app/
├── app/                  # Next.js App Router
│   ├── api/              # Backend API routes (Auth, Workouts)
│   ├── components/       # Shared UI components (NavigationBar)
│   ├── context/          # Client-side AuthContext
│   ├── styles/           # Vanilla CSS stylesheets
│   ├── layout.tsx        # Main Root layout
│   └── page.tsx          # Home page
├── data/                 # JSON database storage
│   └── users.json        # Persistent user records
├── lib/                  # Backend utilities
│   └── db.ts             # Workout split lists and DB helpers
├── middleware.ts         # Route protection middleware
├── package.json          # Node scripts and dependencies
└── tsconfig.json         # TypeScript configuration
```

---

## Setup & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Compile and start the production build:
```bash
npm run build
npm start
```