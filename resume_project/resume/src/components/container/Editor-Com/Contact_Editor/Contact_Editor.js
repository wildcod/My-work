import React , {Component} from 'react'
import './Contact_Editor.css'

class ContactEditor extends Component {
     render(){
         return <div  id="ContactEditor">
                    <h5>Contact Information</h5>
                    <hr/>
                     <p>  Email<br/>
                     <input type="text" placeholder="Email"  onChange={this.props.EmailChange}/><br/>
                     </p>

                     <p>
                     Address<br/>
                     <input type="text" placeholder="Address"   onChange={this.props.ResAddressChange}/><br/>
                     </p>

                    <p>
                     Phone<br/>
                     <input type="text" placeholder="Phone"   onChange={this.props.PhoneChange}/><br/>
                     </p>

                </div>
     } 
}

export default ContactEditor;