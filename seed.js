const db = require('./models');

// just seeding one album 
let album1 = {
    name: "Purple Rain",
    releaseDate: "1984",
    artist: "Prince"
};
let album2 = {
    name: "Rockstar Rain",
    releaseDate: "2019",
    artist: "Post Molane"
}

//  seeding one user
let user1 = {
    name: "Karma",
    email: "Karma@work.com",
    profilePic: "",
    albums: []
};


// Drop database 

function dropAlbums() {
    const result = db.Album.deleteMany({}, (err, albums) => {
        if (err) return console.log('err', err);
        console.log('albums', albums);
    })
    return result;
}


function dropUsers() {
    const result = db.User.deleteMany({}, (err, users) => {
        if (err) return console.log('err', err);
        console.log('users', users);
    })
    return result;
}
// Inserting the data in the database
function insertData() {
    const newAlbum = new db.Album(album1);
    const newAlbum2 = new db.Album(album2);
    newAlbum.save(err => {
        if (err) return console.log('err', err);
        console.log(`created new album ${newAlbum}`);
    })
    // saving another album2 in to user's album
    newAlbum2.save(err => {
        if (err) return console.log('err', err);
        console.log(`created another newalbum ${newAlbum2}`)
    })

    const u = new db.User(user1);
    u.albums.push(newAlbum._id);
    u.albums.push(newAlbum2._id);
    u.save(err => {
        if (err) return console.log('err', err);
        console.log(`created new user, ${u}`)
    })

}
dropAlbums()
    .then(dropUsers)
    .then(insertData)



// // Adding a new user and a new album to that new user. 
// db.User.deleteMany({}, (err, users) => {
//     db.Album.deleteMany({}, (err, albums) => {
//         db.Album.create(princeAlbum, (err, savedAlbum) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 // savedAlbum.artist = artist;
//                 console.log(savedAlbum);
//                 savedAlbum.save((err, savedArtistAlbum) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         db.User.create(user1, (err, savedUser) => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                             savedUser.albums.push(savedArtistAlbum);
//                             savedUser.save((err, savedUserAlbum) => {
//                                 if (err) {
//                                     console.log("error is in 3");
//                                 } else
//                                     // console.log(JSON.stringify(savedUserAlbum));
//                                     console.log(savedAlbum);
//                             })
//                         })
//                     }
//                 })
//             }
//         })
//     })
// });

// // Adding a new user and a new album to that new user. 
// console.log("YOU ARE IN THIS FILE")
// db.User.deleteMany({}, (err, users) => {
//     db.Album.deleteMany({}, (err, albums) => {
//         db.Album.create(princeAlbum, (err, savedAlbum) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 // savedAlbum.artist = artist;
//                 console.log(savedAlbum);
//                 savedAlbum.save((err, savedArtistAlbum) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         db.User.create(user2, (err, savedUser) => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                             savedUser.albums.push(savedArtistAlbum);
//                             savedUser.save((err, savedUserAlbum) => {
//                                 if (err) {
//                                     console.log("error is in 3");
//                                 } else
//                                     console.log(JSON.stringify(savedUserAlbum));
//                             })
//                         })
//                     }
//                 })
//             }
//         })
//     })
// });


// db.User.deleteMany({}, (err, users) => {
//     db.Album.deleteMany({}, (err, albums) => {
//         db.Album.create(princeAlbum, (err, savedAlbum) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 // savedAlbum.artist = artist;
//                 console.log(savedAlbum);
//                 savedAlbum.save((err, savedArtistAlbum) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         db.User.create(user1, (err, savedUser) => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                             savedUser.albums.push(savedArtistAlbum);
//                             savedUser.save((err, savedUserAlbum) => {
//                                 if (err) {
//                                     console.log("error is in 3");
//                                 } else
//                                     console.log(JSON.stringify(savedUserAlbum));
//                             })
//                         })
//                     }
//                 })
//             }
//         })
//     })
// });