import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        activeUser: "Red",
        activeColor: "red",
        }
    }

    changeUser(user) {
        if (user == "Red") {
            this.setState({
                activeUser: "Blue",
                activeColor: "blue",
                }
            )
        } else {
            this.setState({
                activeUser: "Red",
                activeColor: "red",
            })
        }
    }

    render() {
        return (
            <div>
                Board
                <Circle activeUser={this.state.activeUser} activeColor={this.state.activeColor} onClick={this.state.changeUser} />
            </div>
        );
    };
}