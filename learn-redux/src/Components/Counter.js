import React from 'react'
import heart from './myheart.svg'
import {StaggeredMotion,spring} from 'react-motion'


// const config = {stiffness:150,damping:10}
// const toCSSZoom = (scale) => ({transform : `scale3d(${scale}, ${scale},${scale})`})

const Persons = (props) => {
     
    return <div>

                {/* <StaggeredMotion defaultStyles={[{width: 0},{width: 0},{width: 0},{width: 0},]}
                    styles={prevStyles => prevStyles.map((_,i) => {
                         return i==0? {width:spring(100)}:{width :spring(prevStyles[i-1].width)}}
                    )}>

                         { value => 
                            <div>
                            {value.map((val,i) => <img key={i}  src={heart} style={{ width :val.width}}  /> )}
                            </div>
                         }  

    
                </StaggeredMotion> */}

               <h1>Counter : {props.counter.counter}</h1>
               <button onClick = {props.IncrementHandler}>Increment</button>
               <button onClick = {props.AddFive}>Add 5</button>
               <hr/>
               <button onClick={() => props.storeResult(props.counter.counter)}>Store Result</button>
               <ul>
                         
                             {props.StoredResult.storedResult.map((storedRes,i) => {
                                     return <li onClick={() =>  props.deleteResult(storedRes.id)}  >{storedRes.val}</li>            
                             })}
                         
               </ul>   
         </div>

}

export default Persons;