import React , {Component} from 'react'
import './Exp_Editor.css'

class ExpEditor extends Component {
     render(){
         return <div  id="ExpEditor">
                    <h5>Experience</h5>
                    <hr/>
                     <p>  Job title<br/>
                     <input type="text" placeholder="Job title"  onChange={this.props.JobTitleChange}/><br/>
                     </p>

                     <p>
                     Company<br/>
                     <input type="text" placeholder="Company"   onChange={this.props.CompanyChange}/><br/>
                     </p>

                    <p>
                     Address<br/>
                     <input type="text" placeholder="Address"   onChange={this.props.AddressChange}/><br/>
                     </p>

                     <p>
                     Start date<br/>
                     <input type="text" placeholder="Start date"   onChange={this.props.StartDateChange}/><br/>
                     </p>
                     
                     <p>
                     End date<br/>
                     <input type="text" placeholder="End date"    onChange={this.props.EndDateChange}/><br/>
                     </p>

                     <p>
                     Description<br/>
                    <input type="text" placeholder="Decription" onChange={this.props.DescriptionChange} /><br/>
                     </p>
                </div>
     } 
}

export default ExpEditor;