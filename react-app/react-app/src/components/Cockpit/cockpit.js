import React from 'react'
import classes from './cockpit.css'

const Cockpit = (props) => {

    const assignClassesName = [];

    if(props.person.length <= 2){
        assignClassesName.push(classes.red) // classes = ['red']
    }
 
    if(props.person.length <= 1){
     assignClassesName.push(classes.bold) // classes = ['red' , 'bold']
 }
    
    return (
        <div className={classes.Cockpit}>
               <h1> Hi I'am React User </h1>
               <p className={assignClassesName.join(' ')}> Hi I'm react user </p>
                <button onClick={props.clicked}
                style = {props.style} className="btn btn-primary"
               >Switch Name </button>
      </div>
    )

}

export default Cockpit;