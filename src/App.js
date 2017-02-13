import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Menu from './components/Menu/Menu';
import SizePickers from './components/SizePickers/SizePickers';
import {GameState} from './GameState';



const SIZES = [2,3,5,10,15,25,50];
const COLORS = ['blue','red','green','yellow','orange'];


class App extends Component {
  constructor(props){
  	super(props);
    this.pickerHandler  = this.pickerHandler.bind(this);
    this.sizePickersHandler = this.sizePickersHandler.bind(this);
    this.incrementCount  = this.incrementCount.bind(this);    
    this.onWin  = this.onWin.bind(this);
    this.state = {
      gameState: new GameState(5,COLORS,this),
      count: 0,
      won: false,
      size: 5
    };
     

  }

  pickerHandler(color){
    this.state.gameState.colorFill(color);
    this.incrementCount();
  }
  sizePickersHandler(size){
    this.setState({
      gameState: new GameState(size,COLORS,this),
      count: 0,
      size: size,
      won: false
    });
  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
}
  newGame() {
    this.setState({
      gameState: new GameState(this.state.size,COLORS,this),
      count: 0,
      size: this.state.size,
      won: false
    }); 
  }
  onWin() {
    this.setState({
      won: true
    });
  }
  render() {
    let wonOrNot;
    if(this.state.won){
      wonOrNot = <div><p>YOU WON!</p><p>Moves: {this.state.count}</p></div>
    }else{
      wonOrNot =
        (<div>
            <Menu colors={COLORS} pickerHandler={this.pickerHandler} moves={this.state.count}/>
            <Grid gameState={this.state.gameState} colors={COLORS} size={this.state.size} />
          </div>)
    }
    return (
    <div className="app">
    <h1>Color Flood</h1>
            <div className="buttons">
              <div className="newgame" onClick={() => this.newGame()}><p>New Game</p></div>
              <SizePickers sizes={SIZES} onClick={this.sizePickersHandler} />
            </div>
      {wonOrNot}
      </div>)
  }
}

export default App;


// return (
//       <div className="app">
//         <h1>Color Flood</h1>
//         <div className="buttons">
//           <div className="newgame" onClick={() => this.newGame()}><p>New Game</p></div>
//           <SizePickers sizes={SIZES} onClick={this.sizePickersHandler} />
//         </div>
//         <Menu colors={COLORS} pickerHandler={this.pickerHandler} moves={this.state.count}/>
//         <Grid gameState={this.state.gameState} colors={COLORS} size={this.state.size} />
//       </div>
//       )