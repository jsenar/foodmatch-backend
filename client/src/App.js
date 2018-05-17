import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  //componentDidMount() {
    //fetch('api/hello')
      //.then(res =>{
        //console.log(res);
      //})
  //}

  componentDidMount() {
    this.callApi()
      .then(res => {this.setState({ response: res.express });
    console.log(this.state.response);})
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <SearchForm></SearchForm>
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', businesses: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.callSearch()
    .then(res => alert('A name was submitted: ' + res.businesses))//this.setState({ businesses: res.businesses }))
      //alert('A name was submitted: ' + this.state.businesses);
    event.preventDefault();
  }

  //componentDidMount() {
    //this.callSearch()
      //.then(res => this.setState({ businesses: res.businesses }))
      //.catch(err => console.log(err));
  //}
  callSearch = async () => {
    const response = await fetch('/api/search/'+this.state.value);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
