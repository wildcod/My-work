import React , {Component} from 'react';
import './Buttons.css';


class Buttons extends Component {
     render () {
         return (  
              <div> 
                    <button className="btn" onClick={this.props.changedDigit('7')}>7</button>
                    <button className="btn" onClick={this.props.changedDigit('8')}>8</button>
                    <button className="btn" onClick={this.props.changedDigit('9')}>9</button>
                    <button className="btn" onClick={this.props.lastClear()}>C</button>
                    <button className="btn" onClick={this.props.performOperation('-')}>-</button>
                    <button className="btn" onClick={this.props.inputPi()}>pi</button>
                    
                    <button className="btn" onClick={this.props.inputPercent()}>%</button>                   
                    <button className="btn" onClick={this.props.changedDigit('4')}>4</button>
                    <button className="btn" onClick={this.props.changedDigit('5')}>5</button>
                    <button className="btn" onClick={this.props.changedDigit('6')}>6</button>
                    <button className="btn" onClick={this.props.performOperation('/')}>/</button>
                    <button className="btn" onClick={this.props.performOperation('*')}>*</button>
                    <button className="btn" onClick={this.props.displayClear()}>AC</button>
                    <button className="btn" onClick={this.props.changedDigit()}>1/x</button>
                    <button className="btn" onClick={this.props.changedDigit('1')}>1</button>
                    <button className="btn" onClick={this.props.changedDigit('2')}>2</button>
                    <button className="btn" onClick={this.props.changedDigit('3')}>3</button>
                    <button className="btn" onClick={this.props.inputDot('.')}>.</button> 
                    <button className="btn" onClick={this.props.performOperation('+')}>+</button>
                    <button className="btn" onClick={this.props.changedDigit()}>e</button>
                    <button className="btn" onClick={this.props.changedDigit()}>x!</button>
                    <button className="btn" onClick={this.props.performOperation('=')}> = </button>
              </div>
         );
         
     }
     
}

export default Buttons ;