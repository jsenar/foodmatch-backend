if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const yelp = require('yelp-fusion');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();
const port = process.env.PORT || 5000;

const MONGO_URI = 'mongodb://uname:asdf1234@ds135519.mlab.com:35519/foodmatch';

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const apiKey = process.env.YELP_KEY

let searchRequest = {
  term:'restaurants',
  location: '',
  categories: 'restaurants, All',
  radius: 8000,
  limit: 5
};

const yelpClient = yelp.client(apiKey);

app.get('/api/search/:location', (req, res) => {
  searchRequest.location = req.params.location;
  yelpClient.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    res.send({businesses: prettyJson})
  }).catch(e => {
    console.log(e);
  });
})

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get(“/”, (req, res) =>
    res.sendFile(path.resolve(__dirname, “./public/index.html”))
);

app.listen(port, () => console.log(`Listening on port ${port}`));
