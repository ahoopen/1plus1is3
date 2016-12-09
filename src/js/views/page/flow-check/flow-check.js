import React, {Component} from 'react';
import {Link} from 'react-router';
import {manager} from '../../../flow/index';
import RaisedButton from 'material-ui/RaisedButton';

export default class FlowCheck extends Component {

    getSubLinks() {
        const current = manager.getCurrent();

        if (current.hasSubSteps()) {
            return current.getSubSteps().map(substep => {
                return (
                    <div key={substep.route.id}>
                        <Link to={substep.getUrl({id: 1})}>
                            <RaisedButton secondary={true} label={`Naar ${substep.route.name}`}/>
                        </Link>
                        <br/>
                    </div>
                );
            });
        }
    }

    getNextLink() {
        const next = manager.getNext();
        if (next) {
            return (
                <Link to={next.getUrl({id: 1})}>
                    <RaisedButton primary={true} label={`Naar ${next.route.name}`}/>
                </Link>
            )
        }
    }

    getPreviousLink() {
        const previous = manager.getPrevious();
        if (previous) {
            return (
                <Link to={previous.getUrl({id: 1})}>
                    <RaisedButton secondary={true} label="Terug"/>
                </Link>
            )
        }
    }

    render() {
        const current = manager.getCurrent();
        const nextLink = this.getNextLink();
        const previousLink = this.getPreviousLink();
        const subLinks = this.getSubLinks();

        return (
            <div>
                <h1>{current.route.id}. {current.route.name}</h1>
                <p>{current.route.description}</p>
                <RoundButton onClick={this.handle}/>
                {nextLink}
                <br />
                {subLinks}
                <hr />
                {previousLink}
            </div>
        );
    }
}

