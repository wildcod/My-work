import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import  './Contact.css'
class Contact extends Component {

    render() {
        return <div>
        <Link to="/contact-information" id="link">
               <div id="Contact">
                    <h4 id="heading-Contact"> Contact Information</h4>
                    <div id="List">
                      <h6>Email</h6>
                      <p id="f1">{this.props.State.Email}</p>
                      <h6 >Address</h6>
                      <p id="f1">{this.props.State.ResAddress}</p>
                      <h6>Phone</h6>
                      <p id="f1">{this.props.State.Phone}</p>
                     </div>

               </div>
         </Link>
         </div>
    }

}

export default Contact