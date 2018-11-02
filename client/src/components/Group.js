import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import CardDeck from './CardDeck.js'

class Group extends Component {

  constructor(props){
    super(props);

    this.state = {
      userName: null,
      names: {
        Phil: 2,
        Jordan: 0
      },
      showIndex: 0,
      restaurants: []
    };
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  //TODO: Fix react/express proxy issues
  componentDidMount() {
    fetch('vote-group/' + this.props.match.params.id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then( (res) => {
        console.log(res);
        return res.body;
      }).then( (restaurants) => {
        this.setState({ restaurants: restaurants });
        console.log("Fetched vote group");
      })
  }

  like(e) {
    e.preventDefault();
    var index = this.state.showIndex;
    var restaurants = this.state.restaurants;
    var newRestaurant = Object.assign({}, restaurants[index], {liked: true});
    var newRestaurants = [...restaurants.slice(0, index),
                          newRestaurant,
                          ...restaurants.slice(index+1)];
    this.setState({showIndex: this.state.showIndex + 1, restaurants: newRestaurants});
  }

  dislike(e) {
    e.preventDefault();
    var index = this.state.showIndex;
    var restaurants = this.state.restaurants;
    var newRestaurant = Object.assign({}, restaurants[index], {liked: false});
    var newRestaurants = [...restaurants.slice(0, index),
                          newRestaurant,
                          ...restaurants.slice(index+1)];
    this.setState({showIndex: this.state.showIndex + 1, restaurants: newRestaurants})
  }

  render() {
    return (
      <div className="group">
        <CardDeck
          restaurants={this.state.restaurants}
          showIndex={this.state.showIndex}
          like={this.like}
          dislike={this.dislike}>
        </CardDeck>
      </div>
    );
  }
}

export default Group;
