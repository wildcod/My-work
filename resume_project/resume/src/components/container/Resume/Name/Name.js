import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Name.css'
class Name extends Component {

    render(){
        return <div>
                     <Link to="/name"  id="link" > <div id="name" > <div id="Name" > {this.props.State.FullName} </div> </div>
                     </Link> 
             </div>
    }
}

export default Name