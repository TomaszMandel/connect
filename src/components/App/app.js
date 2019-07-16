import React from 'react';
// import { InputField } from '../InputField/inputField';
// import { WelcomeMessage } from '../WelcomeMessage/WelcomeMessage';
import { Board } from './../Board/Board';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
    };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                {/* <InputField value={this.state.value} onChange={this.handleChange} /> */}
                {/* <WelcomeMessage user={this.state.value} /> */}
                <Board />
            </div>
        );
    };
}