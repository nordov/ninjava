const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FightSchema = new Schema({
    player1: {
        //Plyaer1 always starts the fight
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    player2: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    player1_moves: {
        //Since Player1 always starts the fight, moves are required
        type: Array,
        required: true
    },
    player2_moves: {
        //PLayer2 might not be available so have to wait on moves
        type: Array
    },
    fights_expiration: {
        //Time fight ends even if Player2 doesn't respond (12hrs after start)
        type: Date
    },
    fight_is_over: {
        type: Boolean,
        default: false //true until all moves are in or fight expires
    }, 
    draw: {
        //If it is a draw both players get 1 point
        type: Boolean
    },
    winner: {
        type: Schema.Types.ObjectId, ref: 'User',
    }       
}, { timestamps: true });

module.exports = mongoose.model("fights", FightSchema);