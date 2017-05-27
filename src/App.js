import React, { Component } from 'react';
import './App.css';
import Districts from './Districts';

export default class App extends Component {

  render() {
    const { requestPosts } = this.props.actions;
    const { prefs, cities } = this.props.app;
    return (
      <div className="App">
        <Districts prefs={ prefs } cities={ cities } requestPosts={ requestPosts } />
      </div>
    );
  }
}
