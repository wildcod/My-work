import React , {Component} from 'react'
import './from.css'

class Form extends Component {
     render(){
         return (
             <div  classname="form" >
                    <h1>Check Wheather </h1>
                    Country :<input type="text" placeholder="Country" /><br/>
                    City : <input type="text" placeholder="City" /><br/>
                    <button className="btn">Check</button>
             </div>
         )
     }
}

export default Form;