const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseDate: String,
    artist: {
        type: String,
        required: true
    }

    // artist: {
    //     type: Schema.Types.ObjectId,
    //     ref: `Artist`
    // },

});

const Album = mongoose.model(`Album`, AlbumSchema);
module.exports = Album;