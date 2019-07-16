import React from 'react';

export const Circle = (props) => {
    return (
        <div>
            <div className="div-circle" onClick={() => {console.log('jestem kółkiem')}}></div>
            <div>{props.user}</div>
        </div>
    )
}