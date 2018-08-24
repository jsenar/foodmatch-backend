if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const yelp = require('yelp-fusion');
const url = 'mongodb://localhost/foodmatch';
var MongoClient = require('mongodb').MongoClient

const apiKey = process.env.YELP_KEY

var searchRequest = {
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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
