const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonAlertSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    hair: {
        type: String,
    },
    height: {
        type: String,
    },
    eyes: {
        type: String,
    },
    location: {
        line1: { type: String },
        line2: { type: String },
        city: { type: String },
        state: { type: String },
        zipcode: { type: Number },
    },
    position: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    status: {
        type: String,
        enum: ["Missing", "Found"],
        default: "Missing",
    },
    details: {
        type: String,
    },
    image: {
        type: String,
    },
    vehicle: {
        year: { type: Number },
        make: { type: String },
        model: { type: String },
        color: { type: String },
        image: { type: String },
    },
    data: {
        type: Date,
        default: Date.now,
    },
});

const PersonAlert = mongoose.model("personAlerts", PersonAlertSchema);
module.exports = PersonAlert;
