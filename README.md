# 💪 Assignment-06 — FitLog

FitLog is a modern workout library and planning web application that helps users explore exercises, view workout details, create a daily workout plan, and save workouts for later.

## 🚀 Live Website

Deployed Website:

## 📌 Project Description

FitLog is a dark-themed workout management application built with Next.js and TypeScript.

Users can browse different workouts and view important workout information such as muscle groups, equipment, difficulty, duration, calories, sets, reps, and rating.

Users can also add workouts to today's plan, save workouts for later, mark planned workouts as completed, and remove workouts from their plan.

The workout data is fetched from the provided FitLog API.

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Icons
* React Toastify
* React Context API
* Next.js Image
* REST API

## ✨ Features

### 1. 🏋️ Workout Library

Browse a collection of workouts with information such as:

* Workout name
* Muscle groups
* Equipment
* Duration
* Calories burned
* Rating

### 2. 📖 Workout Details

Users can open an individual workout and view detailed information including:

* Workout description
* Difficulty
* Equipment
* Sets and reps
* Instructions
* Calories burned
* Duration
* Rating

### 3. 📋 Today's Workout Plan

Users can add workouts to their daily workout plan and manage the exercises they want to complete.

### 4. 🔖 Save for Later

Users can save workouts for later so they can easily access their preferred workouts.

### 5. ✅ Mark Workout as Done

Users can mark a workout as completed from their workout plan.

### 6. 🗑️ Remove Workout

Users can remove workouts from today's plan when they no longer want to perform them.

### 7. 🔔 Toast Notifications

The application provides feedback using toast notifications when users:

* Add a workout
* Save a workout
* Try to add a duplicate workout
* Try to save a duplicate workout
* Remove a workout

### 8. 📱 Responsive Design

The application is designed to work across:

* Mobile devices
* Tablets
* Desktop screens

### 9. 🌙 Dark Gym-Themed UI

FitLog uses a dark interface with a bright lime accent color to create a focused gym/workout experience.

## 🔗 API

FitLog uses the provided workout API.

### All Workouts

`https://api.abcz.workers.dev/api/fitlog`

### Single Workout

`https://api.abcz.workers.dev/api/fitlog/:id`

## 📂 Main Project Structure

```text
fitlog/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── my-plan/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   └── workouts/
│       └── [id]/
│           ├── page.tsx
│           └── loading.tsx
│
├── src/
│   ├── components/
│   │   ├── card/
│   │   ├── footer/
│   │   ├── Herosec/
│   │   ├── myplancard/
│   │   └── shared/
│   │
│   ├── context/
│   │   └── context.tsx
│   │
│   └── type/
│       └── Datatype.ts
│
├── public/
├── package.json
├── next.config.ts
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone GITHUB_REPOSITORY_URL

### 2. Go to the project directory

cd fitlog


### 3. Install dependencies

npm install

### 4. Run the development server

npm run dev


Open your browser and visit:

`http://localhost:3000`

## 🏗️ Build for Production

Create a production build:


npm run build


Start the production server:


npm start

## 👨‍💻 Author

### Mahafujul Alam Tipo

Built using Next.js, TypeScript, and Tailwind CSS.
