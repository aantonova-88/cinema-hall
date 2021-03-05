import React, { Component } from 'react';

import './movie-list.css';

export default class MovieList extends Component {

  onChangeTicketPrice = (e) => {
    let ticketPrice = +e.target.value;
    return ticketPrice;
  }

  render () {
    const {onChangePrice} = this.props;
    return (
    <div className="movie-container">
    <h3>Choose a movie</h3>
    <select className="movie"
            onChange={(e) => onChangePrice(this.onChangeTicketPrice(e))}>
      <option value="10">Avatar ($10) </option>
      <option value="12">Joker ($12)</option>
      <option value="8">Soul ($8)</option>
      <option value="9">The Lion King ($9)</option>
    </select>
  </div>

)};
}
