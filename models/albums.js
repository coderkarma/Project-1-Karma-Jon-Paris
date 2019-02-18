const
    mongoose = require(`mongoose`),
    Schema = mongoose.Schema;

const AlbumSchema = new Schema({
        name: String,
        releaseDate: String,
        // artist: {
        //     type: Schema.Types.ObjectId,
        //     ref: `Artist`
        // },
        image: String,
        album: String,
        
    }),
    Album = mongoose.model(`Album`, AlbumSchema);
module.exports = Album;