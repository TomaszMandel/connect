import React from 'react';
import { Board } from './../Board/Board';
import { InfoBox } from './../InfoBox/InfoBox';

export class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        activeUser: "none",
        activeColor: "transparent",
        }
        this.changeUser = this.changeUser.bind(this);
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
        return(
        <div className="flex-board">
            <Board activeUser={this.state.activeUser} activeColor={this.state.activeColor} onClick={this.changeUser} />
            <InfoBox activeUser={this.state.activeUser} />
        </div>
        )
    }
    
}
