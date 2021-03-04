import React, { Component } from 'react';

import './movie-list.css';

export default class MovieList extends Component {

  render () {
    return (
    <div className="movie-container">
    <h3>Pick a movie</h3>
    <select id="movie">
      <option value="10">Avatar ($10) </option>
      <option value="12">Joker ($12)</option>
      <option value="8">Soul ($8)</option>
      <option value="9">The Lion King ($9)</option>
    </select>
  </div>

)};
}
