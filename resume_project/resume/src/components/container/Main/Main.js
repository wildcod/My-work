import React, { Component } from 'react';
import Layout from '../Layout/Layout'

class Main extends Component {

  state = {
       FullName : "Sahil Kanojia",
       Experience : {
                //  JobTitle : "Job-title",
                // Company : "Google",
                // StartDate : "01/12/2015",
                // EndDate : "01/12/2017"
       },

       JobTitle : "Job-title",
       Address : "New Delhi ,India",
       Company : "Google",
       StartDate : "01/12/2015",
       EndDate : "01/12/2017",
       Description : ` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
                         Dont list everything keep it relevant and include data that shows the impact `,


       Education : "type your eduction qualification...",
       Skills : "type your skills...",
       ContactInformation : "type your contact information..."
  }

  NameChangedHandler = (event) => {
        this.setState({
             FullName : event.target.value
        })
  }

  JobTitleChangedHandler = (event) => {
       this.setState({
         
                   JobTitle : event.target.value
         
       })
  }

  CompanyChangedHandler = (event) => {
    this.setState({
      // Experience : {
                Company : event.target.value
      // }
    })
}

AddressChangedHandler = (event) => {
  this.setState({
    // Experience : {
              Address : event.target.value
    // }
  })
}

 StartDateChangedHandler = (event) => {
  this.setState({
    // Experience : {
              StartDate : event.target.value
    //}
  })
}

EndDateChangedHandler = (event) => {
  this.setState({
    // Experience : {
              EndDate : event.target.value
    // }
  })
}

DescriptionChangedHandler = (event) => {
  this.setState({
    // Experience : {
              Description : event.target.value
    // }
  })
}

  render() {
    return ( 

      <div className="App">
       <Layout
       State = {this.state}
       NameChange = {this.NameChangedHandler}
       JobTitleChange = {this.JobTitleChangedHandler}
       CompanyChange = {this.CompanyChangedHandler}
       StartDateChange= {this.StartDateChangedHandler}
       EndDateChange = {this.EndDateChangedHandler}
       DescriptionChange = {this.DescriptionChangedHandler}
       AddressChange = {this.AddressChangedHandler}
       />
      </div>
      
    );
  }
}

export default Main;
