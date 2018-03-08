import React,{Component} from 'react'
import Contact from './ContactInfo/Contact'
import Skills from './Skills/Skills'
import './SideBlog.css'

class SideBlog extends Component {
    
    render() {
         return <div id="SideBlog">
                       <Contact/>
                       <Skills/>
                </div>
    }
     
}

export default SideBlog