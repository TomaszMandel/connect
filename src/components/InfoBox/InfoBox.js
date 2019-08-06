import React from 'react';

export class InfoBox extends React.Component {
    render() {
        return (
            <div id="info-box">
                <button onClick={this.props.onClick}>Start</button>
                <div>Active user:</div>
                <div>*{this.props.activeUser}</div>
                <br></br>
                <div>Timer:</div>
                <div id="timer">{this.props.timer}</div>
                <br></br>
                <button onClick={this.props.resetBoard}>Reset game</button>
            </div>
        )
    }
}