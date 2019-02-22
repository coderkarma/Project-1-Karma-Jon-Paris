const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    db = require('./models');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.sendFile(__dirname + 'public/index.html')
=======
    res.sendFile(__dirname + '/views/index.html')
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
})


/*
 * Response Endpoints
 */

// console.log("hello")
// Find all Users 
<<<<<<< HEAD
app.get('/api/users', (req, res) => {
    db.User.find()
        .populate('albums')
=======
app.get('/api/user', (req, res) => {
    db.User.find()
        // .populate('albums')
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
        .exec((err, users) => {
            if (err) {
                throw err;
            }
            console.log(users);
            res.json(users);
        })
})

// Find One User & All Albums
app.get("/api/user/:id", (req, res) => {

    db.User.findOne({
            _id: req.params.id
        }, (err, foundUser) => {
            if (err) {
                console.log(err)
            }
<<<<<<< HEAD
        }).populate('album')
=======
        }).populate('albums')
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
        .exec((err, users) => {
            if (err) {
                throw err;
            }
<<<<<<< HEAD
            console.log(users);
=======
            // console.log(users);
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
            res.json(users);
        })
})

// Find One profile

app.get("/api/profile/:id", (req, res) => {

    db.User.findOne({
            _id: req.params.id
        }, (err, foundUser) => {
            if (err) {
                console.log(err)
            }
        }).populate('albums')
        .exec((err, users) => {
            if (err) {
                throw err;
            }
            // console.log(users);
            res.json(users);
        })
})

// Create User
app.post("/api/user", (req, res) => {
    let newUser = new db.User({
        name: req.body.name,
        email: req.body.email,
        profilePic: req.body.profilePic
    });
    console.log(newUser);
    newUser.save((err, user) => {
        if (err) {
            throw err;
        }
<<<<<<< HEAD


=======
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
        res.json(user);
    })
});

<<<<<<< HEAD
// create album 

app.post('/api/user/:id/albums', (req, res) => {
    db.User.findOne({
        _id: req.params.id
    }, (err, foundUser) => {
        if (err) {
            console.log(err)
        }
        console.log(`user at create new album for user: ${foundUser}`);
=======
//Update a User
// Still needs testing. 
app.put('/api/user/:id', (req, res) => {

    const userId = req.params.id;

    db.User.findOneAndUpdate({
            _id: userId
        },
        req.body, {
            new: true
        },
        (err, updatedUser) => {
            if (err) {
                throw err;
            }
            res.json(updatedUser);
        });
});

// create album 

app.get('/api/albums', (req, res) => {
    db.Album.find({}, (err, albums) => {
        if (err) {
            return console.log(err)
        }
        res.json(albums);
    })
})
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6

app.post('/api/user/:id/albums', (req, res) => {
    db.User.findOne({
            _id: req.params.id
        }).populate('albums')
        .exec((err, foundUser) => {
            if (err) {
                return console.log(err)
            }
            console.log(`user at create new album for user: ${foundUser}`);
            if (foundUser) {
                db.Album.findOne({
                    name: req.body.name
                }, (err, foundAlbum) => {
                    if (err) {
                        return console.log(err)
                    }

                    if (!foundAlbum) {
                        console.log('album does not exist');
                        let newArtist = req.body.artist;
                        foundAlbum = new db.Album({
                            name: req.body.name,
                            releaseDate: req.body.releaseDate,
                            artist: newArtist
                        });
                        db.Album.create(foundAlbum, (err, newAlbum) => {
                            if (err) {
                                return console.log(err)
                            }
                            foundAlbum = newAlbum;
                        });
                    }
                    foundUser.albums.push(foundAlbum);
                    foundUser.save((err, user) => {
                        if (err) {
                            return console.log(err)
                        }
                        res.json(user)
                    })
                })
            }
        });
<<<<<<< HEAD
        foundUser.albums.push(newAlbum);
        foundUser.save((err, user) => {
            if (err) {
                throw err;
            }

            res.json(user)
        })
    });
=======
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
});

// Delete an Album


<<<<<<< HEAD
app.delete('/api/user/:id/albums/:id', (req, res) => {
    db.Album.remove({
        _id: req.params.id
    }, (err, removedAlbum) => {
        if (err) {
            console.log(err)
        }
        res.json(removedAlbum);
    })
=======
app.delete('/api/user/:userid/albums/:albumid', (req, res) => {
    // console.log('param', req.params.userid);
    db.User.findOne({
        _id: req.params.userid
    }, (err, foundUser) => {
        // console.log('user found',foundUser)
        if (err) {
            console.log(err)
        }
        let deletedAlbum = req.params.albumid
        console.log('album to delete', deletedAlbum);
        let albums = foundUser.albums;
        for (i = 0; i < albums.length; i++) {
            console.log(`in for ${albums[i]._id}`)
            if (albums[i]._id == deletedAlbum) {
                console.log(`Removing this album ${albums[i]}`)
                albums.splice(i, 1);

            };
        }
        foundUser.albums = albums;
        console.log(foundUser.albums);
        foundUser.save((err, savedUser) => {
            // console.log('user found',foundUser)
            if (err) {
                console.log(err)
            }
            res.json(savedUser);
        });
    });
>>>>>>> a6771405d99d8ff1c0735f057d780290622a1af6
});

//Run server and run on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});