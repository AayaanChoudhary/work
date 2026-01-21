const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    releaseDate:{
        type:Date,
        default:Date.now
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    songs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    }

})

module.exports = mongoose.model('Album', AlbumSchema);