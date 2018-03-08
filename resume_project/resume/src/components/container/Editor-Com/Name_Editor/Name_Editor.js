import React , {Component} from 'react'
import './Name_Editor.css'

class NameEditor extends Component {
     render(){
         return <div >
                     <div id="NameEditor">
                     <h5> Type Your Name </h5>
                     <hr/>
                      Name :  <input id="NameEdi" type="text" placeholder="Full Name" onChange ={this.props.NameChange} /> 
                      </div>
                </div>
     } 
}

export default NameEditor;