const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',

    },
    song:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song',
    }]
})
module.exports = mongoose.model('Playlist', PlaylistSchema);