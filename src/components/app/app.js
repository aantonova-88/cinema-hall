import React, { Component } from 'react';

import Seat from '../seat';
import CountSeats from '../count-seats';
import Hall from '../hall';

import './app.css';

export default class App extends Component {

  seatId = 0;

  state = {
    seats: [
      this.createSeats(),
      this.createSeats(),
      this.createSeats(),
      this.createSeats(),
      this.createSeats(),
      this.createSeats()
    ]
  };

  createSeats() {
    return {
      reserved: false,
      id: this.seatId++
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {... oldItem,
      [propName]: !oldItem[propName]};

    return [
      ... arr.slice(0, idx),
      newItem,
      ... arr.slice(idx + 1)
    ];
  }

  onToggleReserved = (id) => {
    this.setState(({ seats }) => {
      return {
        seats: this.toggleProperty(seats, id, 'reserved')
      };
    });
  };

  render() {

    const { seats } = this.state;

    const reserveCount = seats
                      .filter((el) => el.reserved).length;
    const freeCount = seats.length - reserveCount;

    return (
      <div>

        <Hall
          seats = {seats}
          onToggleReserved = {this.onToggleReserved} />
        <CountSeats free={freeCount} reserve={reserveCount}/>
      </div>
    )
  };
}
