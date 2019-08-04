import React from 'react';
import { Circle } from './Circle';

export class Board extends React.Component {

    render() {
        return (
            <div>
                <h2>Board</h2>
                <div id="board">
                    {this.props.scoreRows.map((elementY, indexY) => 
                    <ul>
                    {elementY.map((elementX, indexX) => 
                        <div>
                            <Circle 
                            indexY={indexY} 
                            indexX={indexX}
                            scoreRows={this.props.scoreRows} 
                            activeUser={this.props.activeUser} 
                            activeColor={this.props.activeColor} 
                            changeUser={this.props.changeUser} />
                            {console.log("elemY/X: " + elementY + "/" + elementX, "indexY/X: " + indexY + "/" + indexX)}
                        </div>
                    )

                }
                </ul>
                )}
                </div>
            </div>
        );
    };
}