import React,{Component} from 'react'
import './Editor.css'
import NameEditor from '../Editor-Com/Name_Editor/Name_Editor'

class Editor extends Component {
     
    render(){

        return <div>
                   <NameEditor NameChange = {this.props.NameChange} />
             </div>
    }
}

export default Editor