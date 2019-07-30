import React from 'react';
import { Board } from './../Board/Board';
import { InfoBox } from './../InfoBox/InfoBox';

export class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        activeUser: "Red (first round)",
        activeColor: "red",
        scoreRows: ["", "","","","","",""],
        }
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(circleIndex) {
        if (this.state.activeUser == "Blue") {
            this.setState({
                activeUser: "Red",
                activeColor: "red",
                }
            )
        } else {
            this.setState({
                activeUser: "Blue",
                activeColor: "blue",
            })
        }
        const newList = this.state.scoreRows.map((element, index) => {
            if(index === circleIndex) {
                return this.state.activeUser
            } else {
                return element
            }
        })
        this.setState({
            scoreRows: newList,
        }, () => console.log(this.state.scoreRows) )
    }

    render() {
        return(
        <div className="flex-board">
            <Board activeUser={this.state.activeUser} activeColor={this.state.activeColor} changeUser={this.changeUser} scoreRows={this.state.scoreRows} />
            <InfoBox activeUser={this.state.activeUser} />
        </div>
        )
    }
    
}
