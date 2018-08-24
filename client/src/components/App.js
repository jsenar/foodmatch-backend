import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SearchForm from './SearchForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', businesses: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(event) {
    fetch('/api/search/'+this.state.value)
      .then(res => alert('A location was submitted: ' + res.businesses))
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Food Match</h1>
        </header>
        <SearchForm onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.value}></SearchForm>
      </div>
    );
  }
}

export default App;
