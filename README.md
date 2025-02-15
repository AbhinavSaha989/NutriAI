# NutriAI

Welcome to the NutriAI - Food Image Recognition App! This application is designed to recognize food items from images and provide detailed nutritional information using a machine learning model.

## Overview

This application is divided into two main parts: the frontend and the backend. The backend is responsible for handling API requests and processing images using a pre-trained machine learning model, while the frontend allows users to interact with the application via a web interface.

## Features

- **Image Upload**: Users can upload images of food items for analysis.
- **Nutritional Analysis**: The app provides detailed nutritional information for recognized food items.
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Calorie Tracking**: Users can track their daily and weekly calorie intake.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For styling the components.
- **Zustand**: For state management.
- **Lucide-React**: For using icons in the application.

### Backend

- **Node.js**: For building the server-side application.
- **Express.js**: As the web framework.
- **MongoDB**: For the database, hosted on MongoDB Atlas.
- **JWT**: For authentication.
- **Mongoose**: For database modeling and interaction.


## Setup and Development

### Environment Setup

Ensure you have Node.js and npm installed. Clone the repository and navigate to the project directory.

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Set up the environment variables in a `.env` file.
4. Start the server: `npm run dev`

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Set up the environment variables in a `.env` file.
4. Start the development server: `npm run dev`

## Deployment

- For the frontend, build the application using `npm run build` to generate optimized static files.
- For the backend, ensure the server is configured for production.

## Contributing

We welcome contributions! Please fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

