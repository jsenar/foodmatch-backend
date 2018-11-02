if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const yelp = require('yelp-fusion');
const voteGroup = require('./routes/voteGroup.route');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const url = 'mongodb://uname:asdf1234@ds135519.mlab.com:35519/foodmatch';
const mongoDb = process.env.MONGODB_URI || url;
mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

app.use('/vote-group', voteGroup);

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
