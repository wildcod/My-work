import React ,{Component} from 'react'
import Name from './Name/Name'
import Experience from './Experience/Experience'
import Education from './Education/Eduction'
import Project from './Project/Project' 
import './Resume.css'
class Resume extends Component {
     
    render(){
        return <div id="Resume">
                    <Name State = {this.props.State}/> 
                    <Experience/>
                    <Education/>
                    <Project/>
             </div>
    }
}

export default Resume