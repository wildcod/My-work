import React , {Component} from 'react'
import './Education_Editor.css'

class EducationEditor extends Component {
     render(){
         return <div  id="EduEditor">
                    <h5>Education</h5>
                    <hr/>
                     <p>  Name of school/institution<br/>
                     <input type="text" placeholder="Institution"  onChange={this.props.InstitutionChange}/><br/>
                     </p>

                     <p>
                     Degree<br/>
                     <input type="text" placeholder="Degree"   onChange={this.props.DegreeChange}/><br/>
                     </p>

                    <p>
                     Grduation year<br/>
                     <input type="text" placeholder="Year"   onChange={this.props.YearChange}/><br/>
                     </p>

                     <p>
                     Location<br/>
                     <input type="text" placeholder="Location"   onChange={this.props.LocationChange}/><br/>
                     </p>
                

                     <p>
                     Description<br/>
                    <input type="text" placeholder="Decription" onChange={this.props.DescriptionEduChange} /><br/>
                     </p>
                </div>
     } 
}

export default EducationEditor;