import React, { Component } from 'react';
import './App.css';
import Districts from './Districts';

export default class App extends Component {

  render() {
    const { requestPosts } = this.props.actions;
    return (
      <div className="App">
        <Districts { ...this.props.app } requestPosts={ requestPosts } />
      </div>
    );
  }
}
