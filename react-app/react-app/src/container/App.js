import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/cockpit';

class App extends Component {

  constructor(props){
    super(props)
    console.log('[App.js] inside constructor')
  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount')
  }

  shouldComponentUpdate(nextProps , nextState){
    console.log('UPDATED App.js inside shouldComponentUpadte' , nextProps , nextState);
    return true;
}

componentWillUpdate(nextProps , nextState){
    console.log('UPADTED App.js inside componentWillUpdate' , nextProps , nextState);
}

componentDidUpdate(){
    console.log('UPADTED App.js inside componentDidDUpdate');
}

  state = {
    person : [
      { id : "sknc" ,name : "sahil" , age : 13},
      { id : "skcnkc", name : "harshiv" , age : 14},
      { id : "csknck" ,name : "manu" , age : 20}
    ],
    showPerson : false
  }

  SwitchNameHandler = (newName) => {
    //console.log("Was Clicked");
    this.setState({              // update the state object and don't touch the unpdated things . it call in class component only not in function
      person : [
        {name : newName , age : 19},
        {name : "harshiv" , age : 14},
        {name : "manu" , age : 20}
      ]
    })
  }

  nameChangedHandler = (event) => {
   
    this.setState({              
            person : [
        {name : "sahil" , age : 19},
        {name : event.target.value , age : 14},
        {name : "manu" , age : 20}
      ]
    })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({showPerson : !doesShow})    
  }

  deletePersonHandler = (personIndex) => {
             const person = this.state.person;
             person.splice(personIndex,1);
             this.setState({person : person})
  }

  render() {

     console.log('[App.js] inside render')

    const style = {
      backgroundColor : "green",
      // ':hover' : {
      //   backgroundColor : "lightgreen",
      //   color : "balck"
      // }
   }

//    const assignClassesName = [];

//    if(this.state.person.length <= 2){
//        assignClassesName.push(classes.red) // classes = ['red']
//    }

//    if(this.state.person.length <= 1){
//     assignClassesName.push(classes.bold) // classes = ['red' , 'bold']
// }

    // update
    let person = null;

    if(this.state.showPerson) {
      person = (
        <div>
              <Persons
               person={this.state.person}
               clicked = {this.deletePersonHandler}
              />   
        </div> 
      );
      style.backgroundColor = "blue";
    }

      
    //   style[':hover'] = {
    //     backgroundColor : "lightblue",
    //     color : 'black'
    //   }
    // }
    
    return (
      // <StyleRoot>
      <div className={classes.App}>
      <button onClick={() => {this.setState({showPerson : true})}}>Check</button>
        <Cockpit
        style={this.style}
        person={this.state.person}
        clicked={this.toggleHandler}
        />
        {person}  
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
