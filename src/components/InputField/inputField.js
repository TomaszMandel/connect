import React from 'react';

export const InputField = (props) => {
    return (
        <div>
            <div className="div-common">What's your name?</div>
            <input
             className="inputField"
             value={props.value}
             onChange={props.onChange}
             >
             </input>
        </div>
    );
}