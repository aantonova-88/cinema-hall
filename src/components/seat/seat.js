import React, { Component } from 'react';

import './seat.css';


export default class Seat extends Component {

  render () {

    const { onToggleReserved, reserved } = this.props;

    let classNames = 'seat';

    if (reserved) {
      console.log(123456);
      classNames = 'reserve';
    }

    return <div
              className={classNames}
              onClick={onToggleReserved}>
          </div>

  };
}
