# Backend

This is the backend for the entire application. It is a Node.js application built using Express.js.

## API Endpoints

### User Endpoints

- `POST /user/signup`: Creates a new user
- `POST /user/login`: Logs in an existing user
- `GET /user/logout`: Logs out the current user
- `GET /user/me`: Returns the current user's information

### Calorie Endpoints

- `POST /calorie`: Adds a new calorie entry for the current user
- `GET /calorie/daily`: Returns the current user's daily calorie intake
- `GET /calorie/weekly`: Returns the current user's weekly calorie intake

## Database

This application uses MongoDB as its database. The database is hosted on MongoDB Atlas.

## Authentication

This application uses JSON Web Tokens (JWT) for authentication. When a user logs in, a JWT is generated and returned to the client. The client should then include this JWT in the Authorization header of all subsequent requests. The server will verify the JWT and authenticate the user.

## Development

To run the application in development mode, use the following command:


