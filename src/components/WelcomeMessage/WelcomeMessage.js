import React from 'react';

export const WelcomeMessage = (props) => {
    if (props.user) {
        return (
        <div className="div-common">Welcome, {props.user}</div>
        )
    } else return (
        <div className="div-disabled">Welcome, unknown player</div>
    )
}