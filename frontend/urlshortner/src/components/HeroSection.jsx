import React,{useState} from 'react';
import '../App.css';
import { addurl,showhash } from '../service/api';
import { Button } from './Button';
import './HeroSection.css';
import '../../src/service/api'
import axios from 'axios';

function HeroSection() {
  const [url, seturl] = useState({
    hash:'', 
    url:'', 
    date:''
});

const onValueChange = (e) => {
  console.log(e.target.value);
  seturl({ ...url, [e.target.name]: e.target.value })
}

const addurlfromtxtfield = async() =>{

axios.post("http://localhost:4000", url).then((response)=>{
      console.log(response);
      seturl(response.data);
    }).catch((error) =>{
      console.log(error);
    })
}
// const gethash = async()=>{
//   await showhash().then((response)=>{
//     console.log(response);
//   }).catch((error) =>{
//     console.log(error);
//   })
// }

  return (

    

    <div className='hero-container' >
      <h1>TIRED OF REMEMBERING LONG URLS?</h1>
      <p>What are you waiting for? Shorten them Right Now!</p>

      <div className='hero-btns'>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        
          <div class="container">
            <div class="material-textfield">
              <input placeholder=" " type="text" onChange={(e) => onValueChange(e)} name='url'  id="my-input"></input>
              
              <label>Enter URL</label>
            </div>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              onClick={(e)=> {console.log(url);addurlfromtxtfield(url);}}
            >
              Shorten URL
            </Button>
          </div>
        <div class="box">
          <div class="inner-box">

            <div class="text">Here is your shortened URL: http://localhost:4000/{url.hash} </div>
            <Button
              className='but'
              buttonStyle='btn1--outline'
              buttonSize='btn1--large'
              onClick={(e)=>{navigator.clipboard.writeText(`http://localhost:4000/${url.hash}`)}}
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