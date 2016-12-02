import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
import {manager} from './flow/index';

const mockOrder = {
    id: 1
};

export default class TempNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleClose = () => this.setState({open: false});

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

    getMenuItem(flowStep) {
        return (
            <MenuItem key={flowStep.route.id} onTouchTap={this.handleClose}>
                <Link to={flowStep.getUrl(mockOrder)}>
                    <FlatButton label={flowStep.route.name}/>
                </Link>
            </MenuItem>
        );
    }

    getLinks() {
        let links = [];

        Object.values(manager.steps)
            .forEach(flowStep => {
                links.push(this.getMenuItem(flowStep));
                if (flowStep.hasSubSteps()) {
                    flowStep.getSubSteps().forEach(subStep => links.push(this.getMenuItem(subStep)))
                }
            });

        return links;
    }

    render() {
        const links = this.getLinks();

        return (
            <Drawer
                docked={false}
                width={240}
                open={this.state.open}>
                {links}
                {this.props.children}
            </Drawer>
        );
    }
}
