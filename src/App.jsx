import React from "react";
import "./App.css";
import Box from "./components/Box";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    const boxes = [];
    const numBoxes = 24;
    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    });
    }
    // set default state
    this.state = {
      boxes,
    };
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
  };

  getRandomColor() {
    const singleColor = Math.floor(Math.random()*256);
    return singleColor;
  };

  handleBoxClick(id) {
    const boxes = this.state.boxes.map((box) => {
      if (id === box.id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return box;
    });     

    this.setState({ boxes });  
  };

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          border: "1px solid black",
          display: "inline-block"
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{this.state.boxes.map((box) => {
          return <Box 
          key={box.id} 
          color={box.color}
          handleClick={() => this.handleBoxClick(box.id)} 
          />
        })}</div>
      </main>
    );
  }
};

export default App;
