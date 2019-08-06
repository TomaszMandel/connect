import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {

    render() {
        return (
            <div>
                <h2>Board</h2>
                <div id="board">
                    {this.props.scoreRows.map((elementY, indexY) => 
                    <span className="circle-row">
                    {elementY.map((elementX, indexX) => 
                        <div>
                            <Circle 
                            indexY={indexY} 
                            indexX={indexX}
                            activeUser={this.props.activeUser} 
                            activeColor={this.props.activeColor} 
                            changeUser={this.props.changeUser} />
                        </div>
                    )

                }
                </span>
                )}
                </div>
            </div>
        );
    };
}