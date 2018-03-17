import React , {Component} from 'react'
import './Certificate_Editor.css'

class CertificateEditor extends Component {

     render(){
         return <div >
                     <div id="CertificateEditor">
                     <h5> Certificate/Course </h5>
                     <hr/>
                       <input  type="text" placeholder="Project" onChange ={this.props.CertificateChange} /> 
                      </div>
                </div>
     } 
}

export default CertificateEditor;