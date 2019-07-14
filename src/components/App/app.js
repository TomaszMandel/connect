import React from 'react';
import { InputField } from '../InputField/inputField';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <InputField value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    };
}