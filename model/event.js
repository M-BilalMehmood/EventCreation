const mongoose = require('mongoose');
const Event = require('./event');
const User = require('./user');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    reminder: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Event', eventSchema);