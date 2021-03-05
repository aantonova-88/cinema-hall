import React, { Component } from 'react';
import './count-seats.css';


 const CountSeats = ({free, reserve, totalPrice}) => {

    return (
      <div className="amount">
        <h3> <span class="count">{reserve}</span> seats reserved for a price <span class="count">${totalPrice}</span></h3>
        <h3><span class="count">{free}</span> seats available</h3>
      </div>
    );
};

export default CountSeats;
