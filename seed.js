const db = require('./models');

let princeAlbum = {
    name: "Purple Rain",
    releaseDate: "1984",
    artist: {
        name: "Prince",
        artistPic: "",
    }
};

let user3 = {
    name: "Paris",
    email: "Paris@email.com",
    profilePic: "",
    albums: []
};

let user2 = {
    name: "Jon",
    email: "Jon@work.com",
    profilePic: "",
    albums: []
};

let user1 = {
    name: "Karma",
    email: "Karma@work.com",
    profilePic: "",
    albums: []
};


// Adding a new user and a new album to that new user. 
db.User.deleteMany({}, (err, users) => {
    db.Album.deleteMany({}, (err, albums) => {
        db.Album.create(princeAlbum, (err, savedAlbum) => {
            if (err) {
                console.log(err);
            } else {
                // savedAlbum.artist = artist;
                console.log(savedAlbum);
                savedAlbum.save((err, savedArtistAlbum) => {
                    if (err) {
                        console.log(err);
                    } else {
                        db.User.create(user3, (err, savedUser) => {
                            if (err) {
                                console.log(err);
                            }
                            savedUser.albums.push(savedArtistAlbum);
                            savedUser.save((err, savedUserAlbum) => {
                                if (err) {
                                    console.log("error is in 3");
                                } else
<<<<<<< HEAD
                                    console.log(JSON.stringify(savedUserAlbum));
=======
                                    // console.log(JSON.stringify(savedUserAlbum));
                                    console.log(savedAlbum);
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
                            })
                        })
                    }
                })
            }
        })
    })
});

// Adding a new user and a new album to that new user. 
<<<<<<< HEAD

=======
console.log("YOU ARE IN THIS FILE")
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
db.User.deleteMany({}, (err, users) => {
    db.Album.deleteMany({}, (err, albums) => {
        db.Album.create(princeAlbum, (err, savedAlbum) => {
            if (err) {
                console.log(err);
            } else {
                // savedAlbum.artist = artist;
                console.log(savedAlbum);
                savedAlbum.save((err, savedArtistAlbum) => {
                    if (err) {
                        console.log(err);
                    } else {
                        db.User.create(user2, (err, savedUser) => {
                            if (err) {
                                console.log(err);
                            }
                            savedUser.albums.push(savedArtistAlbum);
                            savedUser.save((err, savedUserAlbum) => {
                                if (err) {
                                    console.log("error is in 3");
                                } else
                                    console.log(JSON.stringify(savedUserAlbum));
                            })
                        })
                    }
                })
            }
        })
    })
});


db.User.deleteMany({}, (err, users) => {
    db.Album.deleteMany({}, (err, albums) => {
        db.Album.create(princeAlbum, (err, savedAlbum) => {
            if (err) {
                console.log(err);
            } else {
                // savedAlbum.artist = artist;
                console.log(savedAlbum);
                savedAlbum.save((err, savedArtistAlbum) => {
                    if (err) {
                        console.log(err);
                    } else {
                        db.User.create(user1, (err, savedUser) => {
                            if (err) {
                                console.log(err);
                            }
                            savedUser.albums.push(savedArtistAlbum);
                            savedUser.save((err, savedUserAlbum) => {
                                if (err) {
                                    console.log("error is in 3");
                                } else
                                    console.log(JSON.stringify(savedUserAlbum));
                            })
                        })
                    }
                })
            }
        })
    })
});