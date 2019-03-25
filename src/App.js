import React, { Component } from 'react';
import Helloworld from './components/Helloworld'
 import ButtonGroup from './components/ButtonGroup'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tech:"React"
    }
  }

  changeTech = (e)=>{
    this.setState({
      tech:[e.target.id]
    })
    
}
  render() {


    return (
      <div className="App">
       <Helloworld  tech = {this.state.tech}/>
        <ButtonGroup  buttonClick={this.changeTech}  technologies = {["React" , "Angular" , "Nodes"]} />

      
      </div>
    );
  }
}

export default App;
