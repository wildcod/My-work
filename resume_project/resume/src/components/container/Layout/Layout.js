import React , {Component} from "react"
import Preview from '../Preview/Preview'
import NameEditor from '../Editor-Com/Name_Editor/Name_Editor'
import ExpEditor from '../Editor-Com/Exp_Editor/Exp_Editor'
import './Layout.css'

class Layout extends Component {
     
    render(){
        return <div className="container-fluid">
                   <div className="row">
                              <div className="col-md-3">
                                    <NameEditor NameChange = {this.props.NameChange} />

                                     <ExpEditor 
                                            JobTitleChange = {this.props.JobTitleChange}
                                            CompanyChange= {this.props.CompanyChange}
                                            StartDateChange={this.props.StartDateChange}
                                            EndDateChange={this.props.EndDateChange}
                                            DescriptionChange={this.props.DescriptionChange}
                                            AddressChange={this.props.AddressChange}
                                    />
                              </div>
                              <div className="col-md-9">
                                   <Preview State = {this.props.State}
                                   />
                              </div>
                     </div> 
                     </div>
           
    }
}

export default Layout