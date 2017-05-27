import React, { Component } from 'react';

export default class Districts extends Component {

  render() {
    const { prefs, cities, requestPosts } = this.props;
    return (
      <div>
        <select onChange={ (e) => requestPosts(e.target.value) }>
          {
            prefs.map(pref => <option key={ pref.code } value={ pref.code }>{ pref.name }</option>)
          }
        </select>
        <select>
          {
            cities.map(city => <option key={ city.id } value={ city.id }>{ city.name }</option>)
          }
        </select>
      </div>
    );
  }
}
