# Real-Time Bidding Platform API

## Description
This API allows users to register, login, and participate in real-time item bidding.

## Installation
1. Clone the repo: `git clone https://yourrepo.git`
2. Install dependencies: `npm install`
3. Set up the database using the provided scripts in `/database`

## Running the Project
- Start the server: `npm start`
- Access the API at: `http://localhost:3000`

## Testing
Run tests using: `npm test`

## API Endpoints
### Users
- POST `/users/register` - Register a new user
  - **Body**: `{"username": "user1", "password": "pass123", "email": "email@example.com"}`
  - **Response**: `201 Created`

### Items
- GET `/items` - List all items
  - **Response**: `200 OK` with JSON array of items



