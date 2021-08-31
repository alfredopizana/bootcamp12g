import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CustomHeading from './Components/CustomHeading/index.js'
class App extends Component {
  constructor() {
    super()
    this.state = {
      etapa: "",
      listItems:[]
    }
    this.setEtapa = this.setEtapa.bind(this)
  }
  setEtapa( event ) {
    const value = event.target.value
    console.log( value )
    this.setState({etapa: value})
  }
  saveHandler(){
    
  }
  render(){
    return (
      <>
          <input className="control" type="radio" name="etapa" value="siga" onClick={ this.setEtapa } />
          <label for="">Siga</label>
          <input className="control" type="radio" name="etapa" value="precaucion" onClick={ this.setEtapa } />
          <label for="">Precaucion</label>
          <input className="control" type="radio" name="etapa" value="alto" onClick={ this.setEtapa } />
          <label for="">alto</label>
          <div class="semaforo">
              <div className={`luz ${this.state.etapa}`}>
              </div>
          </div>
          {/*<CustomHeading 
            text = {this.state.title ? this.state.title : "hola Koders!!"} 
            customClasses = {["text-bold","text-red"]}
            />
          */}
      </>
    )
  }

}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
