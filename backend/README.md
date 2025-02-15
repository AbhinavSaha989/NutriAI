# Backend

This is the backend for the entire application. It is a Node.js application built using Express.js.

## API Endpoints

### User Endpoints
- `POST /user/signup`: Creates a new user
- `POST /user/login`: Logs in an existing user
- `GET /user/logout`: Logs out the current user
- `GET /user/get-user`: Returns the current user's information
- `GET /user/get-daily-avg`: Returns the daily calorie average of the user
- `GET /user/get-daily-calorie`: Returns the daily calorie amount of the user
- `POST /user/post-daily-calorie`: Adds to the daily calorie amount


## Database

This application uses MongoDB as its database. The database is hosted on MongoDB Atlas.

## Authentication

This application uses JSON Web Tokens (JWT) for authentication. When a user logs in, a JWT is generated and returned to the client. The client should then include this JWT in the Authorization header of all subsequent requests. The server will verify the JWT and authenticate the user.

## Development

To run the application in development mode, use the following command:


