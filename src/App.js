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
    this.onPickerClick  = this.onPickerClick.bind(this);
    this.onSizePickerClick = this.onSizePickerClick.bind(this);
    this.incrementCount  = this.incrementCount.bind(this);    
    this.onWin  = this.onWin.bind(this);
    this.state = {
      gameState: new GameState(5,COLORS,this.onWin),
      count: 0,
      won: false,
      size: 5
    };
  }

  onPickerClick(color){
    this.state.gameState.colorFill(color);
    this.incrementCount();
  }
  onSizePickerClick(size){
    this.setState({
      gameState: new GameState(size,COLORS,this.onWin),
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
      gameState: new GameState(this.state.size,COLORS,this.onWin),
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
            <Menu colors={COLORS} onPickerClick={this.onPickerClick} moves={this.state.count}/>
            <Grid gameState={this.state.gameState} colors={COLORS} size={this.state.size} />
          </div>)
    }
    return (
    <div className="app">
    <h1>Color Flood</h1>
            <div className="buttons">
              <div className="newgame" onClick={() => this.newGame()}><p>New Game</p></div>
              <SizePickers sizes={SIZES} onClick={this.onSizePickerClick} />
            </div>
      {wonOrNot}
      </div>)
  }
}

export default App;