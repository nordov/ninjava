const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FighterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        image_url: String,
        required: true
    },
    fights_total: {
        type: Number
    },
    fights_won: {
        type: Number
    },
    fights_lost: {
        type: Number
    },
    fights_draws: {
        type: Number
    },
}, { timestamps: true });

module.exports = mongoose.model("fighters", FighterSchema);