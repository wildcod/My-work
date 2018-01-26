import React from 'react'
import './Person.css'

const Person = (props) => {



    return (
        <div className = "Person" style={style}>
                <p onClick = {props.click}> I'm {props.name} and age is {props.age} </p>
                <p>{props.children}</p>
                <input type="text" onChange= {props.changed} value= {props.name}/>
        </div>
)
}

export default Person;