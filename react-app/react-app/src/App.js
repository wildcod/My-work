import React, { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {

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

    const style = {
      backgroundColor : "green",
      // ':hover' : {
      //   backgroundColor : "lightgreen",
      //   color : "balck"
      // }
   }

   const classes = [];

   if(this.state.person.length <= 2){
       classes.push('red') // classes = ['red']
   }

   if(this.state.person.length <= 1){
    classes.push('bold') // classes = ['red' , 'bold']
}

    // update
    let person = null;

    if(this.state.showPerson) {
      person = (
        <div>
               {
                  this.state.person.map( (person , index) => {
                       return <Person
                       click= { () => this.deletePersonHandler(index)} 
                       name={person.name} 
                       age= {person.age}
                       key= {person.id} />
                  })
               }    
        </div> 
      );
    }

      style.backgroundColor = "blue";
    //   style[':hover'] = {
    //     backgroundColor : "lightblue",
    //     color : 'black'
    //   }
    // }
    
    return (
      // <StyleRoot>
      <div className="App">
       <h1> Hi I'am React User </h1>
       <p className={classes.join(' ')}> Hi I'm react user </p>
       <button onClick={this.toggleHandler}
            style = {style} className="btn btn-primary"
       >Switch Name </button>
        {person}  
      </div>
      // </StyleRoot>
    );
  }
}

export default App;
