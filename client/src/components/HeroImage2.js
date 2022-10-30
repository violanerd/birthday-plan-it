import './HeroImage2Styles.css';

import React, { Component } from 'react';

class HeroImage2 extends Component {
  render() {
    return <div className='hero-image'>
      <div className='heading'>
        <div className='content-container'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    </div>
  }
}

export default HeroImage2;