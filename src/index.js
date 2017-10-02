"use strict";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore, combineReducers } from 'redux';
import { createStore } from 'redux';
//import _ from 'lodash';
//import todoApp from './reducers'
import App from './App';
//import * as reducers from './src/reducers/toggle'
import { changeState } from './reducers/toggle';
//import {Router, Route} from 'react-router-dom';
import { HashRouter, Route } from 'react-router-dom';
import { NavbarHeader, TestDiv } from './containers/header';
import { NewItem } from './components/NewItem';
//const appReducers = combineReducers(reducers);
//const appReducers = combineReducers(changeState);

//let store = createStore(todoApp)
//let store = createStore(appReducers);
let store = createStore(changeState);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <NavbarHeader/>
                <Route path='/' component={App}/>
                <Route path='/TestLink' component={TestDiv}/>
                <Route path='/NewItem' component={NewItem}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);



