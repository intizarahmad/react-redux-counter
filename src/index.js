import React from 'react';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import {Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducers'

const logger = store => {
    return next => {
        return action => {
            console.log("Middleware: ", action ) 
            const result = next(action)
            console.log("store: ", store.getState() )
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
