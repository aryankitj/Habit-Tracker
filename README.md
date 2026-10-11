# Habit Tracker

A simple weekly habit tracker built with **React, TypeScript, and Tailwind CSS**. Track your daily habits, monitor your consistency, and build better routines with a clean, dark-themed interface.

## Features

- **Add Habits:** Create new habits to track your daily routines.
- **Delete Habits:** Remove habits you no longer want to track.
- **Weekly Tracking:** View your habits across a Monday-to-Sunday calendar.
- **Daily Completion:** Mark habits as complete or toggle them back to incomplete for a particular day.
- **Weekly Navigation:** Move between weeks to view and manage your habit completions.
- **Completion Streaks:** See your current consecutive-day completion streak for each habit.
- **Daily Progress:** View how many habits you've completed today.
- **Persistent Storage:** Save habits and completion records in browser `localStorage`, so your data remains available after refreshing the page.

## Tech Stack

- **React 19** — Component-based UI
- **TypeScript** — Type safety
- **Vite** — Development server and build tool
- **Tailwind CSS 4** — Styling
- **date-fns** — Date manipulation and formatting
- **React Context API** — Shared habit state
- **Custom React Hook** — Reusable `useLocalStorage` logic

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a version compatible with your installed Vite version)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aryankitj/Habit-Tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Habit-Tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in your terminal to use the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Type-checks TypeScript and builds the production application |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build locally |

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Button.tsx
│   ├── HabitForm.tsx
│   ├── HabitList.tsx
│   └── Header.tsx
├── context/
│   ├── HabitProvider.tsx
│   └── useHabits.ts
├── hooks/
│   └── useLocalStorage.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Data Storage

The application uses the browser's `localStorage` to persist habit data. Habit information and completion dates are stored locally in the browser, without requiring a backend server or database.

**Note:** Data is specific to the browser and device being used. Clearing browser storage can remove saved habits.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
