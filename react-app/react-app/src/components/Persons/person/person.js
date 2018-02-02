import React , {Component} from 'react'
import './Person.css'

class Person extends Component{
        constructor(props){
                super(props)
                console.log('[Person.js] inside constructor')
              }
            
              componentWillMount(){
                console.log('[Person.js] inside componentWillMount')
              }
            
              componentDidMount(){
                console.log('[Person.js] inside componentDidMount')
              }
        render(){

                console.log('[person.js] inside render')

                return (
                        <div className = "Person" >
                                <p onClick = {this.props.click}> I'm {this.props.name} and age is {this.props.age} </p>
                                <p>{this.props.children}</p>
                                <input type="text" onChange= {this.props.changed} value= {this.props.name}/>
                        </div>
                )
        }
} 
export default Person;