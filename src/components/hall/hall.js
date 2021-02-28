import React, { Component } from 'react';

import Seat from '../seat';

import './hall.css';

const Hall = ({seats}) => {

  const elements = seats.map((item) => {
    const {id} = item;
    return (
      <span key = {id}>
        <Seat />
      </span>
    )
  });

  return elements;
}

export default Hall;
