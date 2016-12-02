import React from 'react';
import {browserHistory, Router} from 'react-router'
import {manager} from './js/flow/';

import App from './js/app';

import './scss/main.scss';

const getRouteForStep = function (flowStep, parentStep) {
    let routes = [{
        path: flowStep.route.path,
        component: flowStep.route.component,
        onEnter() {
            manager.updateActive(flowStep, parentStep)
        }
    }];

    if (flowStep.hasSubSteps()) {
        flowStep.getSubSteps().forEach(subStep => {
            routes = routes.concat(getRouteForStep(subStep, flowStep))
        });
    }

    return routes;
};

const Root = () => {
    let routerRoutes = {
        path: '/',
        components: App,
        childRoutes: []
    };

    Object.values(manager.steps).forEach(flowStep => {
        routerRoutes.childRoutes = routerRoutes.childRoutes.concat(getRouteForStep(flowStep));
    });

    return (
        <Router history={browserHistory} routes={routerRoutes}></Router>
    );
};

export default Root;
