import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //     activeUser: "none",
    //     activeColor: "transparent",
    //     }
    //     this.changeUser = this.changeUser.bind(this);
    // }

    // changeUser(user) {
    //     if (user == "Red") {
    //         this.setState({
    //             activeUser: "Blue",
    //             activeColor: "blue",
    //             }
    //         )
    //     } else {
    //         this.setState({
    //             activeUser: "Red",
    //             activeColor: "red",
    //         })
    //     }
    // }

    render() {
        return (
            <div id="board">
                Board
                <Circle activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
            </div>
        );
    };
}