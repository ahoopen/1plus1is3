import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Link to="/start">Klik hier om naar start te gaan</Link>
                </p>
                {this.props.children}
            </div>
        );
    }
}

export default App;
