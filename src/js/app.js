import React, {Component} from 'react';
import {Link} from 'react-router';
import {manager} from './flow/index';

const mockOrder = {
    id: 1
};

class App extends Component {

    getSubSteps(flowStep) {
        if (flowStep.hasSubSteps()) {
            return flowStep.getSubSteps().map(step => {
                return (
                    <li key={step.route.id}>
                        <Link to={step.getUrl(mockOrder)}>{step.route.name}</Link>
                    </li>
                );
            });
        }
    }

    getLinks() {
        return Object.values(manager.steps)
            .map(flowStep => {
                let subLinks = this.getSubSteps(flowStep);
                return (
                    <li key={flowStep.route.id}>
                        <Link to={flowStep.getUrl(mockOrder)}>{flowStep.route.name}</Link>
                        <ul>
                            {subLinks}
                        </ul>
                    </li>
                );
            });
    }

    render() {
        const links = this.getLinks();

        return (
            <div className="App">
                <ul>
                {links}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
