import React, { Component } from 'react';
import './count-seats.css';


 const CountSeats = ({free, reserve, totalPrice}) => {

    return (
      <div>
        <p> {reserve} seats reserved for a price {totalPrice}, {free} seats available </p>
      </div>
    );
};

export default CountSeats;
