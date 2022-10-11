const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const MAX_AGE = 1000
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(
    session({
        secret: 'a1s2d3f4g5h6',
        name: 'session-id', // cookies name to be put in "key" field in postman
        store: mongodb,
        cookie: {
            maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
            sameSite: false,
            secure: false, // to turn on just in production
        },
        resave: true,
        saveUninitialized: false,
    })
)
app.use(express.json());
app.use(require("./routes/record"));
app.use(routes);

const db = require("./config/connection");

const mongodb = new MongoDBStore(
    {
        uri: process.env.DATABASE_CONNECTION_STRING,
        collection: 'mySessions'
    }
)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});