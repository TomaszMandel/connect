import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {
    // renderCircle(i) {
    //     return (
    //         <Circle 
    //         activeUser={this.props.activeUser} 
    //         activeColor={this.props.activeColor} 
    //         onClick={this.props.onClick} />
    //         )
    // }

    render() {
        return (
            <div>
                Board
                <div id="board">
                {/* <Circle activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} /> */}
                        {this.props.rows.row1.map(i => {
                            return (
                                <Circle key={i} activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
                                    )
                                }
                            )
                        }
                        <br></br>
                        {this.props.rows.row2.map(i => {
                            return (
                                <Circle key={i} activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
                                    )
                                }
                            )
                        }
                        <br></br>
                        {this.props.rows.row3.map(i => {
                            return (
                                <Circle key={i} activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
                                    )
                                }
                            )
                        }
                        <br></br>
                        {this.props.rows.row4.map(i => {
                            return (
                                <Circle key={i} activeUser={this.props.activeUser} activeColor={this.props.activeColor} onClick={this.props.onClick} />
                                    )
                                }
                            )
                        }
                </div>
            </div>
        );
    };
}