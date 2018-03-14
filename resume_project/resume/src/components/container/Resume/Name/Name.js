import React ,{Component} from 'react'
import './Name.css'
class Name extends Component {
     
    render(){
        return <div>
                     <div id="name"> <div id="Name"> {this.props.State.FullName} </div> </div>
             </div>
    }
}

export default Name