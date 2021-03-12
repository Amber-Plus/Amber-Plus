const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MissingPersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    hair: {
        type: String
    },
    height: {
        type: String
    },
    eyes: {
        type: String
    },
    location: {
        line1: { type: String },
        line2: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: Number }
    },
    status: {
        type: String
    },
    details: {
        type: String
    },
    image: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const MissingPerson = mongoose.model('missing', MissingPersonSchema);
module.exports = MissingPerson;