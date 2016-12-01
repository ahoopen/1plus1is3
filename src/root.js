import React from 'react';
import {browserHistory, Router, Route } from 'react-router'

import App from './js/app';
import Start from './js/start';
import './scss/main.scss';

const Root = () => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='start' component={Start}/>
        </Route>
    </Router>
);

export default Root;
