import React, { Component } from 'react';
import Seat from '../seat';

import './row.css';

export default class Row extends Component {
  render() {
    return (
      <div>
        <Seat  />
        <Seat  />
        <Seat  />
        <Seat  />
        <Seat  />
      </div>
    )
  };
}
