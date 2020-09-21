import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


/*function Hello (props){
  return <h2>{props.title}</h2>
}*/
//props son propiedades
//const Hello =(props)=> <h2>{props.title}</h2>;

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render() {

    const {
      arrayOfNumbers,
      isActivated,
      number,
      objectWithInfo,
      text,
      title
    } = this.props;

    const textoSegundoBool = isActivated ? "On" : "Off";

    //const mappedNumber = this.props.arrayOfNumbers.map(n => n*2);
    const mappedNumber = arrayOfNumbers.map(this.props.multiply);

    return (
      <div>
        {title}
        <p>{text}</p>
        <p>{number}</p>
        <p>{//JSON.stringify(this.props.boolean)
        }
        </p>
        <p>{textoSegundoBool}</p>
        <p>{//this.props.arrayOfNumbers.join(', ')
        }</p>

        <p>{mappedNumber.join(', ')}</p>

        <p>{objectWithInfo.key}</p>
      </div>
    );
  }
}

//Las props por convención se ordenan alfabeticamente. No afecta en el render que es el orden a mostrar
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Hello title="Hello from Props"/>

          <Text
            arrayOfNumbers={[2, 3, 10]}
            isActivated
            multiply={(number) => number * 4}
            number={2}
            objectWithInfo={{key:'value', key2:'otherValue'}}
            text="Texto string"
            title={<h1>Este es el título</h1>}
          />
      </header>
    </div>
  );
}

export default App;
