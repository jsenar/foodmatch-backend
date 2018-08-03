import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import CardDeck from './CardDeck.js'

var sample_data = [
    {
        "id": "urbane-cafe-san-diego-3",
        "name": "Urbane Cafe",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/CyqdEuEtzlSR5RQfmhhD3w/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/urbane-cafe-san-diego-3?adjust_creative=OLKhy180PkQ8-IL15VREeQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OLKhy180PkQ8-IL15VREeQ",
        "review_count": 291,
        "categories": [
            {
                "alias": "sandwiches",
                "title": "Sandwiches"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 32.9070053100586,
            "longitude": -117.172203063965
        },
        "transactions": [],
        "price": "$",
        "location": {
            "address1": "6765 Mira Mesa Blvd",
            "address2": "",
            "address3": "",
            "city": "San Diego",
            "zip_code": "92121",
            "country": "US",
            "state": "CA",
            "display_address": [
                "6765 Mira Mesa Blvd",
                "San Diego, CA 92121"
            ]
        },
        "phone": "+18582475005",
        "display_phone": "(858) 247-5005",
        "distance": 2893.475976261372
    },
    {
        "id": "manna-bbq-san-diego",
        "name": "Manna BBQ",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/3JDBhcnQWyI4PuIJM4RodQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/manna-bbq-san-diego?adjust_creative=OLKhy180PkQ8-IL15VREeQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OLKhy180PkQ8-IL15VREeQ",
        "review_count": 834,
        "categories": [
            {
                "alias": "korean",
                "title": "Korean"
            },
            {
                "alias": "bbq",
                "title": "Barbeque"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 32.9129206848645,
            "longitude": -117.1476405859
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "8188 Mira Mesa Blvd",
            "address2": "",
            "address3": "",
            "city": "San Diego",
            "zip_code": "92126",
            "country": "US",
            "state": "CA",
            "display_address": [
                "8188 Mira Mesa Blvd",
                "San Diego, CA 92126"
            ]
        },
        "phone": "+18585780300",
        "display_phone": "(858) 578-0300",
        "distance": 782.828493124154
    },
    {
        "id": "the-fancy-fish-san-diego-2",
        "name": "The Fancy Fish",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/XlXB9IUTIEbTRDAoH1gMxg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/the-fancy-fish-san-diego-2?adjust_creative=OLKhy180PkQ8-IL15VREeQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OLKhy180PkQ8-IL15VREeQ",
        "review_count": 188,
        "categories": [
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "fishnchips",
                "title": "Fish & Chips"
            }
        ],
        "rating": 4,
        "coordinates": {
            "latitude": 32.9181,
            "longitude": -117.12244
        },
        "transactions": [
            "delivery",
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "9430 Mira Mesa Blvd",
            "address2": "Ste 5B",
            "address3": "",
            "city": "San Diego",
            "zip_code": "92126",
            "country": "US",
            "state": "CA",
            "display_address": [
                "9430 Mira Mesa Blvd",
                "Ste 5B",
                "San Diego, CA 92126"
            ]
        },
        "phone": "+18585866228",
        "display_phone": "(858) 586-6228",
        "distance": 2115.669568136996
    },
    {
        "id": "ariana-cuisine-san-diego-2",
        "name": "Ariana Cuisine",
        "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/PFMgzcMq1wDcisRq9AGE0Q/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/ariana-cuisine-san-diego-2?adjust_creative=OLKhy180PkQ8-IL15VREeQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OLKhy180PkQ8-IL15VREeQ",
        "review_count": 141,
        "categories": [
            {
                "alias": "mediterranean",
                "title": "Mediterranean"
            },
            {
                "alias": "afghani",
                "title": "Afghan"
            },
            {
                "alias": "halal",
                "title": "Halal"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 32.9264427,
            "longitude": -117.1439003
        },
        "transactions": [
            "pickup"
        ],
        "price": "$",
        "location": {
            "address1": "11261 Camino Ruiz",
            "address2": "Ste 3",
            "address3": "",
            "city": "San Diego",
            "zip_code": "92126",
            "country": "US",
            "state": "CA",
            "display_address": [
                "11261 Camino Ruiz",
                "Ste 3",
                "San Diego, CA 92126"
            ]
        },
        "phone": "+18585667700",
        "display_phone": "(858) 566-7700",
        "distance": 764.912952027162
    },
    {
        "id": "pokeland-san-diego-3",
        "name": "Pokeland",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/sWicXf2s2jIQhNQwUUltgg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/pokeland-san-diego-3?adjust_creative=OLKhy180PkQ8-IL15VREeQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=OLKhy180PkQ8-IL15VREeQ",
        "review_count": 265,
        "categories": [
            {
                "alias": "hawaiian",
                "title": "Hawaiian"
            },
            {
                "alias": "seafood",
                "title": "Seafood"
            },
            {
                "alias": "poke",
                "title": "Poke"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 32.91349,
            "longitude": -117.14666
        },
        "transactions": [
            "pickup"
        ],
        "price": "$$",
        "location": {
            "address1": "8270 Mira Mesa Blvd",
            "address2": "Ste B",
            "address3": "",
            "city": "San Diego",
            "zip_code": "92126",
            "country": "US",
            "state": "CA",
            "display_address": [
                "8270 Mira Mesa Blvd",
                "Ste B",
                "San Diego, CA 92126"
            ]
        },
        "phone": "+18588605435",
        "display_phone": "(858) 860-5435",
        "distance": 582.821126418522
    }
]

class Group extends Component {
  render() {
    return (
      <div className="group">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Food Match</h1>
        </header>
        <CardDeck restaurants={sample_data} ></CardDeck>
      </div>
    );
  }
}

export default Group;
