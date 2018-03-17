import React , {Component} from 'react'
import './Skills_Editor.css'

class SkillsEditor extends Component {

  

     render(){
         return <div  id="SkillsEditor">
                    <h5>Skills</h5>
                    <hr/>
                        <label>
                         Name:
                        <input type="text"  onChange={this.props.TempChange} /><br/><br/>
                        <button type="button" className="btn btn-primary" onClick={this.props.SkillsChange}>Submit</button>
                        </label>
                </div>
     } 
}

export default SkillsEditor;