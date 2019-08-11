import React from 'react';
import { Board } from './../Board/Board';
import { InfoBox } from './../InfoBox/InfoBox';

export class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        activeUser: "Red",
        activeColor: "red",
        scoreRows: [
            ["","",""],
            ["","",""],
            ["","",""],
        ]
        }
        this.changeUser = this.changeUser.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
    }

    changeUser(circleIndexY, circleIndexX) {
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
        const newList = [...this.state.scoreRows]
        newList[circleIndexY][circleIndexX] = this.state.activeUser
        
        this.setState({
            scoreRows: newList,
        }, () => this.checkWinner())
    }

    checkWinner() {
        for(let i = 0; i < 3; i++) { 
        if(this.state.scoreRows[i][0] === this.state.scoreRows[i][1]&&this.state.scoreRows[i][1] === this.state.scoreRows[i][2]) {
            console.log('winner is ', this.state.scoreRows[i][0])
        } else {
            return
        }
    }
    }

    resetBoard() {
        this.setState({
            scoreRows: [
                ["","",""],
                ["","",""],
                ["","",""],
            ]
        })
        console.log(this.state.scoreRows)
    }

    render() {
        return(
        <div className="flex-board">
            <Board activeUser={this.state.activeUser} activeColor={this.state.activeColor} changeUser={this.changeUser} scoreRows={this.state.scoreRows} />
            <InfoBox activeUser={this.state.activeUser} resetBoard={this.resetBoard} />
        </div>
        )
    }
    
}