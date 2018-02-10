import React , {Component} from 'react'
import './from.css'

class Form extends Component {
     render(){
         return (
             <div  className="root">
                    <h1 className="header">Check Wheather </h1>
                <div className="info">
                    Country :<input className="ctry" type="text" placeholder="Country" /><br/>
                    City :   <input className="city"type="text" placeholder="City" /><br/>
                    <button className="btn  btn btn-primary">Check</button>
                </div>
       
             </div>
         )
     }
}

export default Form;