import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "someText",
      clase: "",
      listItems: []
    };
    this.actualizacionTexto = this.actualizacionTexto.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
  }
  changeHandler(event) {
    const text = event.target.value;
    this.setState({ title : text });
    if (text.includes("azul")) 
      this.setState({ clase: "blue" });
    else {
      this.setState({ clase: "" });
    }
    console.log(text);
  }
  saveHandler(){
    
    this.setState({
      listItems: [...this.state.listItems, this.state.title]
    })
    console.log(this.state.listItems)
  }
  render() {
    return (
      <>
        <label for="">Texto: </label>
        <input type="text" onChange={this.changeHandler} />
        <h1 className={this.state.clase}>{this.state.texto}</h1>
        <button onClick={this.saveHandler}>Guardar</button>
        <ul>
            {
              this.state.listItems.map( (item,index) => <li key={index} >{item}</li>)
            }
        </ul>
      </>

    );
  }
}

export default App;
