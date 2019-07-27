import React from 'react';

export const Circle = (props) => {
    return (
        <div>
            <div className="div-circle" style={{backgroundColor:props.activeColor}} onClick={() => props.onClick(props.activeUser)} ></div>
            {/* <div>User: {props.activeUser}; color: {props.activeColor}</div> */}
        </div>
    )
}
