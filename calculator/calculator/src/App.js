import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator/calculator';
import Buttons from './components/Buttons/Buttons';

const CalculatorOperation = {
     '/':(prevValue , nextValue) => prevValue / nextValue,
     '*':(prevValue , nextValue) => prevValue * nextValue,
     '+':(prevValue , nextValue) => prevValue + nextValue,
     '-':(prevValue , nextValue) => prevValue - nextValue,
     '=' : (prevValue , nextValue) => nextValue
}

class App extends Component {

    state = {
      displayValue : '0',
      waitingForOperand : false,
      operator : null,
      value : null
    }

  inputDigitalHandler = (digit) => {

     let {displayValue ,waitingForOperand,operator} = this.state;
     let oldDisplayValue;

     if(waitingForOperand) {
         this.setState({
             waitingForOperand : false,
             displayValue : displayValue  + operator + String(digit)
         })
     }

     else{
          oldDisplayValue = displayValue === '0' ? String(digit) : displayValue + digit ;

          this.setState({
              displayValue : oldDisplayValue
          })
     }
  }

  inputDotHandler = (dot) => {
      let  {displayValue ,operator} = this.state;

      if(operator && displayValue.split(operator)[1].indexOf('.') === -1) {
           this.setState({
                displayValue : displayValue +'.',
           })
      }

      else if(displayValue.indexOf('.') === -1){ 
             this.setState({
                     displayValue : displayValue + '.'
             })
      }
  }
 
   inputPercentHandler = () => {
        let displayValue = parseFloat(this.state.displayValue)

        this.setState({
             displayValue : String(displayValue / 100)
        })
   }
  
   displayClearHandler = () => {
       this.setState({
           displayValue : '0',
           waitingForOperand : false,
           value : null,
           operator : null
       })
   }

    
   performOperationHandler = (nextoperator) => {
       
       const {displayValue , operator ,value} = this.state;

       let nextValue;


       if(operator && operator !== '='){
           nextValue = parseFloat(displayValue.split(operator)[1]);
       }
       else{
         nextValue = parseFloat(displayValue);
       }


  


       if(value == null){
          this.setState({
              value : nextValue
          })
       }
       else if(operator) {
          const currentValue = value;

          const newValue = CalculatorOperation[operator](currentValue,nextValue)

          this.setState({
              value : newValue,
              displayValue : String(newValue)
          })
       }

       this.setState({
            waitingForOperand : true,
            operator : nextoperator
       })

   }

  lastClearHandler = () => {
 
         let {displayValue} = this.state;
         let lastDisplay;

         if(displayValue.length !== 0){
          lastDisplay = displayValue.slice(0, displayValue.length - 1);
          this.setState({
            displayValue : lastDisplay
        })
         }
         else{
          this.setState({
            displayValue : '0',
            waitingForOperand : false,
            value : null,
            operator : null
        })
         }
  }

  inputPiHandler = () => {
        let {displayValue} = this.state;

        this.setState({
            displayValue : displayValue + '3.14'
        })
  }

  render() {

    return (
      <div className="App">
          <Calculator>
            <div className="disp">{this.state.displayValue}</div>
                <Buttons
                changedDigit = {(digit) => this.inputDigitalHandler.bind(this,digit)}
                inputDot = {(dot) => this.inputDotHandler.bind(this,dot)}
                displayClear={() => this.displayClearHandler.bind(this)}
                inputPercent = {() => this.inputPercentHandler.bind(this)}
                performOperation = {(nextoperator) => this.performOperationHandler.bind(this,nextoperator)}
                lastClear = {() => this.lastClearHandler.bind(this)}
                inputPi = {() => this.inputPiHandler.bind(this)}
                />
          </Calculator>
      </div>
    );
  }
}

export default App;
