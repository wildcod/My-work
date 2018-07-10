import React, { Component } from 'react';
import Counter from './Components/Counter'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {


 

  render() {
    return (
      <div className="App">
        
          <Counter IncrementHandler={this.props.onIncrement}
                   AddFive ={this.props.onAddFive}
                   counter={this.props.ctr}
                   storeResult={this.props.onStoreResult}
                   deleteResult={this.props.onDeleteResult}
                   StoredResult={this.props.StoredResult}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
     return {
       ctr : state.ctr,
       StoredResult : state.res
     }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onIncrement : () => dispatch({type : "INC_COUNTER"}),
     onAddFive : ()=> dispatch({type:"Add_Five",val : 5}),
     onStoreResult : (result) => dispatch({type : "STORED_RESULT", result : result}),
     onDeleteResult : (id) => dispatch({type :"DELETE_RESULT" , resultId : id})     
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
