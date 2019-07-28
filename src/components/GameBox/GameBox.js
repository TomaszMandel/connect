import React from 'react';
import { Board } from './../Board/Board';
import { InfoBox } from './../InfoBox/InfoBox';

export class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        activeUser: "Red (first round)",
        activeColor: "transparent",
        rows: {
            row1: [...Array(7).keys()],
            row2: [...Array(7).keys()],
            row3: [...Array(7).keys()],
            row4: [...Array(7).keys()],
        },
        }
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(user) {
        if (user == "Blue") {
            this.setState({
                activeUser: "Red",
                activeColor: "blue",
                }
            )
        } else {
            this.setState({
                activeUser: "Blue",
                activeColor: "red",
            })
        }
    }

    render() {
        return(
        <div className="flex-board">
            <Board activeUser={this.state.activeUser} activeColor={this.state.activeColor} onClick={this.changeUser} rows={this.state.rows} />
            <InfoBox activeUser={this.state.activeUser} />
        </div>
        )
    }
    
}