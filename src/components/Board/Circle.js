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
        if(this.state.color === 'transparent') {
            this.setState(
                {
                    color: this.props.activeColor,
                }
            );
            this.props.changeUser(this.props.indexY, this.props.indexX);
        } else {
            return
        }
    }

    
    render() {
        console.log('circle', this.props.circleState)
        return (
            <div className="div-circle" 
            style={{backgroundColor:this.state.color}} 
            onClick={this.changeColorAndUser} 
            >
            </div>
        )
    }
}