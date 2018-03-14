import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Main from '../container/Main/Main';

class Home extends Component {
   
    render() {
        return <div>
               <Route path="/"  component={Main} />
             </div>
    }
}

export default Home
