# Weather Forecast App

A modern weather forecast application built with **React**, **TypeScript**, and **Vite**. This project demonstrates a clean architecture with reusable components, hooks, and a scalable folder structure.

## Features

- 🌤️ Real-time weather data fetching
- 📍 Location-based weather search
- ⚡ Fast development with Vite HMR
- 🧩 Modular React components
- 🛠️ TypeScript for type safety
- 🧹 Linting with ESLint and Prettier

## Technologies Used

- **React 19** – UI library for building interactive interfaces
- **TypeScript** – Strongly typed JavaScript for safer code
- **Vite** – Next-generation frontend tooling for fast builds and hot reload
- **Axios** – Promise-based HTTP client for API requests
- **TanStack Query (React Query)** – Powerful data fetching, caching, and state management for React
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **Shadcn UI** – Beautifully designed React components built on top of Radix UI and Tailwind CSS
- **ESLint** – Linting for code quality and consistency
- **Prettier** – Automatic code formatting
- **pnpm / npm** – Fast, efficient package management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/) (or use npm)

### Clone the repository

```sh
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
```

### Environment Variables

Before running the project, create a `.env` file in the root directory and add your [OpenWeather API key](https://openweathermap.org/api):

```env
VITE_OPEN_WEATHER_API_KEY=your_openweather_api_key
```

> Replace `your_openweather_api_key` with your actual API key.

### Installation

Using **pnpm** (recommended):

```sh
pnpm install
```

Or with **npm**:

```sh
npm install
```

### Development

```sh
pnpm run dev
```
Or:
```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build

```sh
pnpm run build
```
Or:
```sh
npm run build
```

### Preview Production Build

```sh
pnpm run preview
```
Or:
```sh
npm run preview
```

## Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI and common components
│   ├── configs/            # App configuration (e.g., httpClient)
│   ├── constants/          # Constant values and messages
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Layout components
│   ├── lib/                # Utility libraries
│   ├── pages/              # Page components
│   ├── routes/             # App routing
│   ├── services/           # API and business logic
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Root component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Linting & Formatting

- **ESLint** is configured for type-aware linting and best practices.
- **Prettier** is used for consistent code formatting.

To lint the code:

```sh
pnpm run lint
```
Or:
```sh
npm run lint
```

To format code with Prettier:

```sh
pnpm run format
```
Or:
```sh
npm run format
```