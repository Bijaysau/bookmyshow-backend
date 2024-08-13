const { Schema } = require('mongoose');

const bookMovieSchema = new Schema({
    movie: {
        type: Schema.Types.String,
        required: true
    },
    slot: {
        type: Schema.Types.String,
        required: true
    },
    seats: {
        A1: { type: Schema.Types.Number, default: 0, min: 0 },
        A2: { type: Schema.Types.Number, default: 0, min: 0 },
        A3: { type: Schema.Types.Number, default: 0, min: 0 },
        A4: { type: Schema.Types.Number, default: 0, min: 0 },
        D1: { type: Schema.Types.Number, default: 0, min: 0 },
        D2: { type: Schema.Types.Number, default: 0, min: 0 }
    }
}, { timestamps: true });

module.exports = { bookMovieSchema };
