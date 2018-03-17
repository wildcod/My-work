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
       temp : "",

       JobTitle : "Job-title",
       Address : "New Delhi ,India",
       Company : "Google",
       StartDate : "01/12/2015",
       EndDate : "01/12/2017",
       Description : ` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
                         Dont list everything keep it relevant and include data that shows the impact `,


       Education : "type your eduction qualification...",
       Institution : "Ambedkar institute of Advanced Communication Technologies and Research",
       Degree : "B-Tech",
       Year : "2020",
       Location : "Geeta Calony,New Delhi",
       DescriptionEdu : ` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
                         Dont list everything keep it relevant and include data that shows the impact `,

       Project :` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
               Dont list everything keep it relevant and include data that shows the impact `,


      Certificate :` Summarize your key responsibilities, leadership, and most stellar accomplishments. 
               Dont list everything keep it relevant and include data that shows the impact `,

       

       Skills : ["C++", "Java","python"],
       ContactInformation : "type your contact information...",
       Email : 'kanojias494@gmail.com',
       ResAddress : 'C-131 Ashok Hotel Staff Quarter Chanakya Puri , New Delhi',
       Phone : '7042989596'
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
 
InstitutionChangedHandler = (event) => {
     this.setState({
            Institution : event.target.value
     })
}

DegreeChangedHandler = (event) => {
  this.setState({
         Degree : event.target.value
  })
}

YearChangedHandler = (event) => {
  this.setState({
         Year : event.target.value
  })
}

LocationChangedHandler = (event) => {
  this.setState({
         Location : event.target.value
  })
}

DescriptionEduChangedHandler = (event) => {
  this.setState({
         DescriptionEdu : event.target.value
  })
}

ProjectChangedHandler = (event) => {
   this.setState({
        Project : event.target.value
   })
}

CertificateChangedHandler = (event) => {
  this.setState({
       Certificate : event.target.value
  })
}

EmailChangedhandler = (event) => {
  console.log(event)
   this.setState({
       Email : event.target.value
   })
}

ResAddressChangedhandler = (event) => {
  this.setState({
      ResAddress : event.target.value
  })
}

PhoneChangedhandler = (event) => {
  this.setState({
      Phone : event.target.value
  })
}


TempChangedHandler =(event) => {
    
  this.setState({
    temp : event.target.value
})

}

SkillsChangedHandler = () => {

 let OldSkills = this.state.Skills
 console.log("old" + OldSkills)

  OldSkills.push(this.state.temp)
  console.log("new " +OldSkills)
  this.setState({
       Skills: OldSkills
  })
}

handleSubmit(event) {
  event.preventDefault();
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
       InstitutionChange = {this.InstitutionChangedHandler}
       DegreeChange = {this.DegreeChangedHandler}
       YearChange = {this.YearChangedHandler}
       LocationChange = {this.LocationChangedHandler}
       DescriptionEduChange = {this.DescriptionEduChangedHandler}
       ProjectChange={this.ProjectChangedHandler}
       EmailChange = {this.EmailChangedhandler}
       ResAddressChange = {this.ResAddressChangedhandler}
       PhoneChange = {this.PhoneChangedhandler}
       SkillsChange = {this.SkillsChangedHandler}
       TempChange = {this.TempChangedHandler}
       CertificateChange ={this.CertificateChangedHandler}

       />
      </div>
      
    );
  }
}

export default Main;
