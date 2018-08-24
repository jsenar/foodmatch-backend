const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const yelp = require('yelp-fusion');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/foodmatch'

//MongoDB test
MongoClient.connect(url, function(err, db){
  db.close();
});


var keys = require('./config.js');
apiKey = keys.yelp_key;

var searchRequest = {
  term:'restaurants',
  location: '',
  categories: 'restaurants, All',
  radius: 8000,
  limit: 5
};

const client = yelp.client(apiKey);

app.get('/api/search/:location', (req, res) => {
  searchRequest.location = req.params.location;
  client.search(searchRequest).then(response => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));
