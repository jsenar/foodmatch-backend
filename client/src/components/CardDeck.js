import React, { Component } from 'react';
import '../App.css';

const Card = (props) => {
  return (
    <div className="card">
      <h3><a target="_blank" href={props.restaurant.url}>{props.restaurant.name}</a></h3>
      <img className="card-img" src={props.restaurant.image_url} />
      <p>{props.restaurant.rating}/5 stars | {props.restaurant.review_count} reviews</p>
    </div>
  )
}

class CardDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: 2
    };
  }

  render() {
    var restaurant = this.props.restaurants[this.state.showIndex]

    return (
      <div className="card-deck">
        <Card restaurant={restaurant} />
      </div>
    );
  }
}

export default CardDeck;
