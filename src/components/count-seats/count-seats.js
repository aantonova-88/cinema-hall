import React, { Component } from 'react';
import './count-seats.css';


 const CountSeats = ({free, reserve}) => {

    return (
      <div>
        <p> {reserve} seats reserved, {free} seats available </p>
      </div>
    );
};

export default CountSeats;
