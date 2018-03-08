import React, { Component } from 'react';
import Layout from './components/container/Layout/Layout'
import './App.css';

class App extends Component {

  state = {
       FullName : "Sahil Kanojia",
       Experience : "type your experience....",
       Education : "type your eduction qualification...",
       Skills : "type your skills...",
       ContactInformation : "type your contact information..."
  }

  NameChangedHandler = (event) => {
        this.setState({
             FullName : event.target.value
        })
  }

  render() {
    return (
      <div className="App">
       <Layout
       State = {this.state}
       NameChange = {this.NameChangedHandler}/>
      </div>
    );
  }
}

export default App;
