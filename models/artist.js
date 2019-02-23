const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    artistPic: String,

})
const Artist = mongoose.model(`Artist`, ArtistSchema);
module.exports = Artist;