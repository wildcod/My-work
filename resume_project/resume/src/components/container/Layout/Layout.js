import React , {Component} from "react"
import Preview from '../Preview/Preview'
import {Route} from 'react-router-dom'
import NameEditor from '../Editor-Com/Name_Editor/Name_Editor'
 import ExpEditor from '../Editor-Com/Exp_Editor/Exp_Editor'
 import EducationEditor from '../Editor-Com/Eduction_Editor/Education_Editor'
 import ProjectEditor from '../Editor-Com/Project_Editor/Project_Editor'
 import ContactEditor from '../Editor-Com/Contact_Editor/Contact_Editor'
 import SkillsEditor from '../Editor-Com/Skills_Editor/Skills_Editor'
 import CertificateEditor from '../Editor-Com/Certificate_Editor/Certificate_Editor'
 import ObjectiveEditor from '../Editor-Com/Objective_Editor/Objective_Editor'
 import Download from '../Download/Download'
import './Layout.css'

class Layout extends Component {
     
    render(){
        return <div className="container-fluid">
                   <div className="row">
                              <div className="col-md-3">
                                   <Route path="/name" render={() =>  <NameEditor NameChange = {this.props.NameChange} 
                                                                     State = {this.props.State}
                                                                     DbNameChange = {this.props.DbNameChange}
                                                                     PhotoChange = {this.props.PhotoChange}
                                                                     uploadPhoto = {this.props.uploadPhoto}
                                   /> } />
                                   <Route path="/experience" render={() => <ExpEditor 
                                                                 JobTitleChange = {this.props.JobTitleChange}
                                                                 CompanyChange= {this.props.CompanyChange}
                                                                 StartDateChange={this.props.StartDateChange}
                                                                  EndDateChange={this.props.EndDateChange}
                                                                 DescriptionChange={this.props.DescriptionChange}
                                                                 AddressChange={this.props.AddressChange}/>  } />
                                   <Route path="/education" render={ () => <EducationEditor 
                                                                 InstitutionChange = {this.props.InstitutionChange}
                                                                 DegreeChange = {this.props.DegreeChange}
                                                                 YearChange = {this.props.YearChange}
                                                                 LocationChange = {this.props.LocationChange}
                                                                 DescriptionEduChange = {this.props.DescriptionEduChange}
                                   />} />
                                   <Route path="/project" render={ () => <ProjectEditor 
                                                                 ProjectChange={this.props.ProjectChange}        
                                   />}
                                   />

                                   <Route path="/certificate" render={ () => <CertificateEditor 
                                                                 CertificateChange={this.props.CertificateChange}        
                                   />}
                                   />

                                   <Route path="/objective" render={ () => <ObjectiveEditor 
                                                                 ObjectiveChange={this.props.ObjectiveChange}        
                                   />}
                                   />

                                   <Route path="/contact-information" render={ () => <ContactEditor 
                                                                  EmailChange = {this.props.EmailChange}
                                                                  ResAddressChange = {this.props.ResAddressChange}
                                                                  PhoneChange = {this.props.PhoneChange}        
                                   />}
                                   />

                                   <Route path="/skills" render={ () => <SkillsEditor
                                                                  SkillsChange = {this.props.SkillsChange}
                                                                  TempChange = {this.props.TempChange}
                                                                      
                                   />}
                                   />

                                   

                              </div>
                              <div className="col-md-9">
                                   <Preview State = {this.props.State}
                                   />
                              </div>
                     </div> 
                      <Download/>
                     </div>
           
    }
}

export default Layout