import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TempNavigation from './temp-navigation';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <TempNavigation/>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
