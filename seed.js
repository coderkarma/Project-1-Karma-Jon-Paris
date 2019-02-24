const db = require('./models');

//  Seeding  albums 
const albums = [{
        name: "Purple Rain",
        releaseDate: "1984",
        artist: "Prince"
    },
    {
        name: "Rockstar Rain",
        releaseDate: "2019",
        artist: "Post Molane"
    },
    {
        name: "Led Zeppelin IV",
        releaseDate: '1971',
        artist: 'Led Zeppelin'
    },
    {
        name: "Wired",
        releaseDate: '1976',
        artist: 'Jeff Beck'

    }
];

const users = [{
        name: "Karma",
        email: 'karma@gmail.com',
        albums: []
    },
    {
        name: "Alice",
        email: 'alice@gmail.com',
        albums: []
    }
]

// Drop Album datas
function dropAlbums() {
    const result = db.Album.deleteMany({}, (err, albums) => {
        if (err) return console.log('err', err);
        console.log('albums', albums);
    })
    return result;
}

// Drop all the users
function dropUsers() {
    const result = db.User.deleteMany({}, (err, users) => {
        if (err) return console.log('err', err);
        console.log('users', users);
    })
    return result;
}


// Inserting the data in the database
function insertAlbums() {
    const createdAlbums = [];
    // create albums
    const result = albums.map(album => {
        const newAlbum = new db.Album(album);
        newAlbum.save(err => {
            if (err) return console.log('err', err);
            console.log(`created another new album ${newAlbum}`);
            createdAlbums.push(newAblum)
        })
    })
    return result;
}

function insertUsers() {
    const result = users.map(user => {
        const u = new db.User(user);
        //  saving new user to database
        u.save(err => {
            if (err) return console.log('err', err);
            console.log(`created new user, ${u}`)
        })
    })
}

//  using promises
dropAlbums()
    .then(dropUsers)
    .then(insertAlbums)
    .then(insertUsers);
