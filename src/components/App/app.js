import React from 'react';
import { InputField } from '../InputField/inputField';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <InputField value={this.state.value} />
        );
    };
}