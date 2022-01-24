import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

const middleWare = [reduxPromise, reduxThunk];

// const theStore = applyMiddleware(reduxPromise, reduxThunk)(createStore)(rootReducer);
const theStore = applyMiddleware(...middleWare)(createStore)(rootReducer);
// const mW = applyMiddleware(reduxPromise)
// const swmw = mW(createStore)
// const finalStore = swmw(rootReducer)

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
