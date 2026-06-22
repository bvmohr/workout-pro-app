# Workout Pro

![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

**Contributor**: Brian Mohr

Welcome to **Workout Pro**, a daily fitness journal application built to track your workouts, manage split routines, and log notes for individual exercises. 

This repository is structured as a monolithic application, with a **React (TypeScript + Vite)** client frontend and an **Express (TypeScript)** server backend.

---

## Features

*   **User Authentication**: JWT-based secure user registration and login stored in Express session cookies.
*   **Interactive Dashboard**: Select from standard workout splits, check off completed exercises, and view real-time completion statistics.
*   **Exercise Notes**: Add customized logs/notes for every exercise in a split (e.g., weights used, sets, or reps).
*   **Built-in Split Templates**:
    *   **PPL (Push/Pull/Legs)**
    *   **Bro Split** (Chest, Back, Shoulders, Arms, Legs)
    *   **Upper/Lower** split
*   **Unified Development Environment**: Run both frontend client and backend server concurrently using one script.

---

## Project Structure

```text
workout-pro-app/
├── client/                 # React frontend client
│   ├── src/
│   │   ├── assets/         # App styles and images
│   │   ├── components/     # Shared components
│   │   ├── routes/         # Router views (Home, About, Dashboard, Login, etc.)
│   │   ├── App.tsx         # Main entry, Router definition, AuthContext provider
│   │   └── main.tsx
│   ├── package.json        # Frontend scripts and client dependencies
│   ├── tsconfig.json       # TypeScript frontend config
│   └── vite.config.js      # Vite configuration
├── server/                 # Express backend server
│   ├── models/             # Database model definitions (db.ts)
│   ├── routes/             # Express API routing (api.ts, workouts.ts)
│   ├── app.ts              # Express application setup, static serving
│   ├── index.ts            # HTTP server entry point
│   ├── package.json        # Backend scripts and server dependencies
│   └── tsconfig.json       # TypeScript backend config
├── package.json            # Root workspace scripts and concurrent runners
└── README.md
```

---

## Prerequisites

*   **Node.js**: `v24` (LTS) or higher is recommended.
*   **npm**: package manager (comes preinstalled with Node).

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/bvmohr/workout-pro-app.git
cd workout-pro-app
```

### 2. Install all dependencies
Installs packages for both the `client` and `server` sub-folders:
```bash
npm run install:all
```

---

## Running the Application

### Development Mode 🧪
To run both the Vite dev-server (frontend) and the ts-node dev-server (backend) simultaneously with hot-reloading:
```bash
npm run dev
```
*   **Frontend client**: [http://localhost:5173](http://localhost:5173) (automatically proxies `/api/*` requests to the server)
*   **Backend server**: [http://localhost:3000](http://localhost:3000)

### Production Mode 
To build the static assets and run the Express app as a standalone production server:
1.  **Build** both frontend and backend configurations:
    ```bash
    npm run build
    ```
2.  **Start** the production server:
    ```bash
    npm start
    ```
*   The application will be served statically from the Express server at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints Reference

All server API routes are prefixed with `/api`.

### Authentication Routes
| Method | Route | Description |
| :--- | :--- | :--- |
| `POST` | `/api/register` | Register a new account (`username`, `password`) |
| `POST` | `/api/login` | Log in and set session cookie (`username`, `password`) |
| `POST` | `/api/logout` | Terminate session and clear authentication cookies |
| `GET` | `/api/me` | Fetch currently logged-in user profile info |

### Workout Routes (Protected by Auth Middleware)
| Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/api/workouts/` | Fetch all available workout split names (e.g., `["ppl", "bro", "ul"]`) |
| `GET` | `/api/workouts/:split` | Fetch specific routines/exercises under the specified split |

---

## Acknowledgements & AI Assistance

This codebase was developed with the assistance of **Google Gemini** (via the **Antigravity** agentic AI coding assistant).