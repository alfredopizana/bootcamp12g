import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      texto: "someText",
      clase: "",
      listItems: []
    };
    this.actualizacionTexto = this.actualizacionTexto.bind(this);
  }
  actualizacionTexto(event) {
    const text = event.target.value;
    this.setState({ texto: text });
    if (text.includes("azul")) 
      this.setState({ clase: "blue" });
    else {
      this.setState({ clase: "" });
    }
    console.log(text);
  }
  saveHandler(){
    this.setState({
      listItems: [...this.state.listItems,this.state.title]
    })
  }
  render() {
    return (
      <>
        <label for="">Texto: </label>
        <input type="text" onChange={this.actualizacionTexto} />
        <button onClick={this.saveHandler}>Guardar</button>
        <h1 className={this.state.clase}>{this.state.texto}</h1>
      </>

    );
  }
}

export default App;
