import React ,{Component} from 'react'
import './Experience.css'
class Experience extends Component {
     
    render(){
        return <div>
               <div id="Exp" className="contaliner-fluid">
                   <h1 id="heading-Experience" > Experience</h1><br/>
                    <div className="row">
                              <div  className="col" >
                                    <h4  id="ExpLeft">
                                    •{this.props.State.Company}<br/>
                                    •{this.props.State.Address}<br/>
                                    •{this.props.State.StartDate} <br/>
                                    •{this.props.State.EndDate} </h4><br/>
                              </div>
                              <div  className="col">
                                    <h6 id="title"> <b>{this.props.State.JobTitle}</b></h6>
                                    <h4 id="Experience">
                                      {this.props.State.Description}
                                    </h4>
                              </div>
                     </div>
                </div>
             </div>
    }
}

export default Experience