# Frontend

This is the frontend for the application, built with React and utilizing various libraries for enhanced functionality.

## Pages and Routes

The application uses React Router for navigation between pages. The following main routes are available:

- `/`: Home page which includes components like `Header`, `FoodAnalyzer`, and `DailyGoalTracker`.
- `/signup`: Signup page with the `SignupForm` component for new user registration.
- `/login`: Login page featuring the `LoginForm` component for user authentication.

## Key Libraries and Tools

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling routing and navigation within the application.
- **Axios**: Used for making HTTP requests to the backend API.
- **React Query**: For data fetching and state management related to server data.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Zustand**: A small, fast state-management solution for React.
- **Lucide-React**: For using icons in the application.
- **Radix UI**: Provides accessible UI primitives for React.

## Environment Setup

The frontend communicates with the backend API using the URL specified in the `.env` file:

```
VITE_API_URL = http://localhost:5000/api/v1
```

## Development

To run the frontend in development mode, use the following command:

```bash
npm run dev
```

This will start the development server, allowing you to view the application in your browser.

## Deployment

For building the application for production, use:

```bash
npm run build
```

This will generate optimized static files for deployment.

## Additional Components

- **ThemeProvider**: Manages the application's theme (dark mode/light mode).
- **Toaster**: Provides toast notifications using the `useToast` hook for feedback on actions like login, logout, etc.

## Styling

The application is styled using Tailwind CSS, with custom configurations defined in `tailwind.config.js` and `src/index.css`.
