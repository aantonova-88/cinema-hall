import React, { Component } from 'react';

import Seat from '../seat';
import CountSeats from '../count-seats';
import Hall from '../hall';
import MovieList from '../movie-list';

import './app.css';

export default class App extends Component {

  state = {
    seats: this.createSeats(50),
    price: 10
  };



  createSeat(id) {
    return {
      id,
      reserved: false
    }
  }

  createSeats (amount) {
    let [,...ids] = Array(amount+1).keys();
    let seats = ids.map((el) => {
      return this.createSeat(el);
    });
    return seats;
  }

  onChangePrice = (numb) => {
    this.setState(({price}) => {
      return {
        price: numb
      };
    });
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

    const { seats, price } = this.state;

    const reserveCount = seats
                      .filter((el) => el.reserved).length;
    const freeCount = seats.length - reserveCount;

    return (
      <div className="container">
        <MovieList onChangePrice = {this.onChangePrice}/>
        <div>
          <Seat />Free <span className="seat reserve"></span>Selected
        </div>
        <div className="screen"></div>
        <Hall
          seats = {seats}
          onToggleReserved = {this.onToggleReserved} />
        <CountSeats free={freeCount} reserve={reserveCount} totalPrice={price*reserveCount}/>
      </div>
    )
  };
}
