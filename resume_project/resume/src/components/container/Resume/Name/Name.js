import React ,{Component} from 'react'
import './Name.css'
class Name extends Component {
     
    render(){
        return <div>
                     <div id="name"> <h1 id="Name">{this.props.State.FullName}</h1> </div>
             </div>
    }
}

export default Name