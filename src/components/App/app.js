import React from 'react';
import { Header } from './../Header/Header';
import { GameBox } from '../GameBox/GameBox';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            headerName: 'Connect',
    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="app">
                <Header headerName={this.state.headerName} />
                <GameBox />
            </div>
        );
    };
}