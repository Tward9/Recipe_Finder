const express = require('express');
const path = require('path');
const mongo = require('./config/connection');
const routes = require('./routes');

var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sess = {
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  resave: true,
  saveUninitialized: true,
  store: new MongoDBStore({
    db: mongo
  }),
}

app.use(session(sess));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

mongo.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
