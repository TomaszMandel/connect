import React from 'react';

export const WelcomeMessage = (props) => {
    if (props.user) {
        return (
        <div>Welcome, {props.user}</div>
        )
    } else return (
        <div>Welcome, unknown player</div>
    )
}