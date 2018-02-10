import React , {Component} from 'react';
import './calculator.css';


class Calculator extends Component {
     render () {

        // AddInput = () => {

        // }

         return (  
              <div className="calc">

                 {this.props.children}                        
              </div>
         );
         
     }
     
}

export default Calculator ;