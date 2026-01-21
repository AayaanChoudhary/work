const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    duration:{
        type:Number,
        required: true,

    },
    streams:{
        type:Number,
        default:0,
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',

    },
    album:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',

    }

})

module.exports = mongoose.model('Song', songSchema);