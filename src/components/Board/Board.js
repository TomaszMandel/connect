import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {
    // renderCircle(i) {
    //     return(
    //         <Circle 
    //         activeUser={this.props.activeUser[i]} 
    //         activeColor={this.props.activeColor[i]} 
    //         onClick={this.props.onClick[i]} />
    //         )
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