# Movie Library – Vue 3 + TypeScript + Vite

This project is a frontend implementation of the Movie Library application built as part of a technical assessment.

The application is developed using **Vue 3**, **TypeScript**, and **Vite**, following the provided Figma design with high visual accuracy. It consumes the **TVMaze public API** to fetch and display movie data.

---

## 🚀 Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **TypeScript**
- **Vite**
- **Zod** for form validation
- **Self-hosted fonts**
- **Vercel** for deployment

---

## 📂 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nzent/movie-library.git
cd movie-library
```

### 2️⃣ Install Dependencies

Ensure you have **Node.js v18 or later** installed.

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_MOVIES_API=https://api.tvmaze.com
```

⚠️ **Important**: The application requires this environment variable to function.

### 4️⃣ Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5️⃣ Build for Production

```bash
npm run build
```

### 6️⃣ Preview Production Build

```bash
npm run preview
```

---

## 🌐 Live Demo

🔗 **Hosted on Vercel**: https://ebeyonds-movies-library.vercel.app/

---

## 📝 Notes

- Frontend implementation follows the Figma design with ~99% accuracy
- Backend (PHP) was not implemented due to clarification requirements
- Uses the public TVMaze API for movie data

---

## 📎 Repository

🔗 https://github.com/Nzent/movie-library