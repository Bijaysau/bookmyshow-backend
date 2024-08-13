
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connection } = require('./connector');
require('dotenv').config();

const app = express();

// Get the client-side URL from environment variables
const clientSideUrl = process.env.CLIENT_SIDE_URL;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure CORS
const corsOptions = {
  origin: clientSideUrl,
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
   credentials: true,
};
app.use(cors(corsOptions));

const GET_REQUEST = process.env.GET_REQUEST || '/api/booking';
const POST_REQUEST = process.env.POST_REQUEST || '/api/booking';
const APP_PORT = process.env.APP_PORT || 8080;

// GET API for fetching last booking
app.get(GET_REQUEST, async (req, res) => {
  try {
    const lastBooking = await connection.findOne({}, {}, { sort: { _id: -1 } });
    if (!lastBooking) {
      return res.status(200).json({ message: "No Previous booking found" });
    }
    res.status(200).json({ data: lastBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST API for booking tickets
app.post(POST_REQUEST, async (req, res) => {
  const { movie, slot, seats } = req.body;

  // Validation
  if (!movie || !slot || !seats) {
    return res.status(400).json({
      error: "Invalid Request, Please select a movie, slot, and seats",
    });
  }

  const newDocument = new connection({ movie, slot, seats });

  try {
    await newDocument.save();
    console.log("Document inserted successfully!");
    res.status(200).json({ message: "Booking Successful" });
  } catch (error) {
    console.error("Error inserting document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Default URL
app.get('/', (req, res) => {
  try {
    res.send("BookMyShow is live!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}!`));

module.exports = app;
