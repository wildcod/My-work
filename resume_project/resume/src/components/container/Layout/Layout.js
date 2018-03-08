import React , {Component} from "react"
import Preview from '../Preview/Preview'
import Editor from '../Editor/Editor'
import './Layout.css'

class Layout extends Component {
     
    render(){
        return <div className="container-fluid">
                   <div className="row">
                              <div className="col-md-3">
                                    <Editor NameChange = {this.props.NameChange}/>
                              </div>
                              <div className="col-md-9">
                                   <Preview State = {this.props.State}/>
                              </div>
                     </div> 
                     </div>
           
    }
}

export default Layout