const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
//const apiKey = 'qXfPLhsztGu32EqZHHmL_rUvLZJ2XuSn6IYhQznIIl8DLxK8W2NreVF8vBk9m4jifBk5R-LTE68JgqSPHHxJxrNPsy75J3ZH1Gi8IfLBtIYztQbbFLOU28t2GOQ8WnYx';
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
    console.log(apiKey);
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
