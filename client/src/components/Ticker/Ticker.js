import React, { Component } from 'react';
import Marquee from 'react-text-marquee';

 
class Ticker extends Component  {
  render() {
    return (
      <div style={{backgroundColor: "#ffffff"}}>
        <Marquee text="Wow this is really quite a long message but it can be handled by this component just fine" />
      </div>
    );
  }
}

export default Ticker;
