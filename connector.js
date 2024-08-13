const mongoose = require('mongoose');
require('dotenv').config();
const { bookMovieSchema } = require('./schema');

/** Determine if the environment is production */
const isProduction = () => process.env.NODE_ENV === "production";

const mongoURI = isProduction() ? process.env.MONGODBLIVE : process.env.MONGODBURI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connection established with MongoDB server.");
})
.catch(err => {
    console.error("Error connecting to MongoDB", err);
});

const collection_connection = mongoose.model(process.env.COLLECTION_NAME, bookMovieSchema);

module.exports = { connection: collection_connection };
