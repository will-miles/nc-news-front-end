import React, { Component } from 'react';
import Header from './components/Header';
import CurrentUser from './components/CurrentUser';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import { Router } from '@reach/router';
import './App.css';

class App extends Component {
  state = {
    username: 'jessjelly'
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header />
        <CurrentUser username={username} changeUser={this.changeUser} />
        <Nav />
        <Router className="articles">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <Topics path="/topics" />
          <SingleArticle path="/article/:id" username={username} />
        </Router>
      </div>
    );
  }
  changeUser = username => {
    this.setState({ username });
  };
}

export default App;
