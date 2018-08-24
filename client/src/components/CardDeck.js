import React from 'react';
import '../App.css';

const Card = (props) => {
  if (props.restaurant){
    return (
      <div className="card">
          <h3><a target="_blank" href={props.restaurant.url}>{props.restaurant.name}</a></h3>
          <img className="card-img" src={props.restaurant.image_url} />
          <p className="stats">
            <span className="rating">{props.restaurant.rating}/5 stars </span>
             | <span className="review-count"> {props.restaurant.review_count} reviews</span>
          </p>
      </div>
    )
  }
  else {
    return (
      <h3>No restaurants to view</h3>
    );
  }
}

//TODO: Create Swipe Animation
const CardDeck = (props) => {
    var restaurant = props.restaurants[props.showIndex] || null;

    return (
      <div className="card-deck">
        <Card restaurant={restaurant} showIndex={props.showIndex}/>
        <div className="button-row">
          <button className="button circle-button" type="button" onClick={props.dislike}>X</button>
          <button className="button circle-button" type="button" onClick={props.like}>H</button>
        </div>
      </div>
    );
}

export default CardDeck;
