const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
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
    board_position: {
        type: Number
    }        
}, { timestamps: true });

module.exports = mongoose.model("users", UserSchema);