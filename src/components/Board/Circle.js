import React from 'react';

export class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'transparent',
        }
        this.changeColorAndUser = this.changeColorAndUser.bind(this);
    }

    changeColorAndUser() {
        this.setState(
            {
                color: this.props.activeColor,
            }
        );
        this.props.changeUser(this.props.indexY);
    }

    render() {
        return (
            console.log("dupa"),
            <div className="div-circle" 
            style={{backgroundColor:this.state.color}} 
            onClick={this.changeColorAndUser} 
            >
            </div>
        )
    }
}