import React, { Component } from 'react';

import Seat from '../seat';
import Row from '../row';
import CountSeats from '../count-seats';

import './app.css';

export default class App extends Component {

  seatId = 0;

  state = {
    seats: [
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

  render() {

    const { seats } = this.state;

    const reserveCount = seats
                      .filter((el) => el.reserved).length;
    const freeCount = seats.length - reserveCount;

    return (
      <div>

        <Row />
        <CountSeats free={freeCount} reserve={reserveCount}/>
      </div>
    )
  };
}
