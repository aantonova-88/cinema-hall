import React, { Component } from 'react';

import Seat from '../seat';

import './hall.css';

const Hall = ({ seats, onToggleReserved }) => {

  const elements = seats.map((item) => {
    const {id, ... itemProps} = item;
    return (
      <span key = {id}>
        <Seat
          {... itemProps}
          onToggleReserved = { () => onToggleReserved(id) } />
      </span>
    )
  });

  return elements;
}

export default Hall;
