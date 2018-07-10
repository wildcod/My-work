import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore ,combineReducers} from 'redux'
import Counter from './Reducer/counter'
import Result from './Reducer/result'
import {Provider } from 'react-redux'

const rootReducer = combineReducers({
    ctr : Counter,
    res : Result
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
