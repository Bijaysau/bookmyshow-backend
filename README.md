# BookMyShow Backend

This repository contains the backend services for the BookMyShow project. The backend is built using Node.js, Express, and MongoDB, providing APIs to manage bookings, movies, theaters, and more.

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```plaintext
PORT=3100
CLIENT_URL=http://localhost:5173
VITE_SERVER=http://localhost:3100

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Bijaysau/bookmyshow-client.git
cd bookmyshow-client
Install the dependencies:

bash
Copy code
npm install
Running the Application
To start the development server, run:

bash
Copy code
npm run dev
This will start the server on the port specified in your .env file (default is 3100).

API Endpoints
Movies
GET /api/movies - Get all movies
GET /api/movies/:id - Get a single movie by ID
Bookings
POST /api/bookings - Create a new booking
GET /api/bookings/:id - Get booking details by ID
Theaters
GET /api/theaters - Get all theaters
GET /api/theaters/:id - Get a single theater by ID
...add more endpoints as required.

Technologies Used
Node.js: JavaScript runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database
Mongoose: MongoDB ODM (Object Data Modeling)
Project Structure
plaintext
Copy code
├── config/
│   └── config.js           # Configuration files (CORS, tokens, etc.)
├── controllers/            # Controllers for handling requests
├── models/                 # Mongoose models
├── routes/                 # API routes
├── middleware/             # Middleware functions
├── utils/                  # Utility functions
├── connector.js            # MongoDB connection configuration
├── server.js               # Entry point of the application
└── package.json            # Project metadata and dependencies
Contributing
Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

