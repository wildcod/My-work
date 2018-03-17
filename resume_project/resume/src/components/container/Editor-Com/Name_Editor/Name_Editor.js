import React , {Component} from 'react'
import './Name_Editor.css'

class NameEditor extends Component {

    componentDidMount() {
        console.log(this.props)
    }

     render(){
         return <div >
                     <div id="NameEditor">
                     <h5> Type Your Name </h5>
                     <hr/>
                      Name :  <input id="NameEdi" type="text" placeholder="Full Name" onChange ={this.props.NameChange} 
                                 value={this.props.State.FullName}
                      /> 
                      </div>
                </div>
     } 
}

export default NameEditor;