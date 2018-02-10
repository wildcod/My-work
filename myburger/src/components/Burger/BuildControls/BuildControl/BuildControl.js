import React from 'react';
import classes from "./BuildControl.css";
const buildControl = (props) => (
    <div className={classes.buildControl} >
         <div>{props.label}</div>
         <div >  Less</div>
         <div>More</div> 
    </div>
);

export default buildControl;