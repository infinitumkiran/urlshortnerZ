import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (

    <div className='hero-container' >
      <h1>TIRED OF REMEMBERING LONG URLS?</h1>
      <p>What are you waiting for? Shorten them Right Now!</p>

      <div className='hero-btns'>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        
          <div class="container">
            <div class="material-textfield">
              <input placeholder=" " type="text"></input>
              <label>Enter URL</label>
            </div>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Shorten URL
            </Button>
          </div>
        <div class="box">
          <div class="inner-box">

            <div class="text">Here is your shortened URL: #######</div>
            <Button
              className='but'
              buttonStyle='btn1--outline'
              buttonSize='btn1--large'
            >
              Copy Link
            </Button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;