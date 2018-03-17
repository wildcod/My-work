import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './Education.css'

class Education extends Component {
     
    render(){
        return <div>  
              <Link to="/education" id="link">
                     <div id="Edu">
                         <h1 id="heading-Education"> Education</h1><br/>
                          {/* <h4 id="Education">DEGREE • DATE EARNED • SCHOOL You 
                              might want to include your GPA and a summary of relevant
                               coursework, awards, and honors.

                       </h4> */}
                         <div className="row">
                              <div  className="col" >
                                    <h4  id="EduLeft">
                                    •{this.props.State.Institution}<br/>
                                    •{this.props.State.Location}<br/>
                                    •{this.props.State.Year} <br/>
                                    {/* •{this.props.State.EndDate} </h4><br/> */}</h4>
                              </div>
                              <div  className="col">
                                    <h6 id="title"> <b>{this.props.State.Degree}</b></h6>
                                    <h4 id="EduDes">
                                      {this.props.State.DescriptionEdu}
                                    </h4>
                              </div>
                     </div>
                    </div>
              </Link>
             </div>
    }
}

export default Education