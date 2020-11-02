import React, { Component } from "react";

class App extends Component {
  handleClick(e) {
    console.log(e);
    alert("Hola, aqui!");
  }

  render() {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hola, esqoy aqui</button>
      </div>
    );
  }
}

export default App;
