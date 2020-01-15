import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    
         
<drawChromeBoiAtCoords  x=event.screenX y=event.screenY />
  }
  
  handleClick = (e) => {
    toggleCycling();
  }
  
   handleKey = (e) => {
    if(e.key === 'tap on a'){
      resize('+');
    }
    else if(e.key === 'tap on s'){
      resize('-');
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick = {this.handleClick}
        onKeyDown ={this.handleKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
