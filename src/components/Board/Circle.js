import React from 'react';

export const Circle = (props) => {
    return (
        <div>
            <div className="div-circle" style={{backgroundColor:props.activeColor}} onClick={props.onClick}></div>
            <div>{props.activeUser} {props.activeColor}</div>
        </div>
    )
}