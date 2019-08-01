import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.renderRow = this.renderRow.bind(this);
    // }

    // renderRow(rows) {
    //     for (row in rows) {
    //         row.map(i => {
    //             return (
    //                 <Circle key={i} activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
    //             )
    //         }
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <h2>Board</h2>
                <div id="board">
                {this.props.scoreRows.map((element, index) => {
                    return(
                        <Circle 
                        index={index} 
                        // indexColumn={indexColumn} 
                        scoreRows={this.props.scoreRows} 
                        activeUser={this.props.activeUser} 
                        activeColor={this.props.activeColor} 
                        changeUser={this.props.changeUser} 
                        />
                    )
                })}
                </div>
            </div>
        );
    };
}