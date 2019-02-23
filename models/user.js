const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePic: String,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: `Album`
    }],
});

const User = mongoose.model(`User`, UserSchema);
module.exports = User;