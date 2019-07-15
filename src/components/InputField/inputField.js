import React from 'react';

export const InputField = (props) => {
    return (
        <div>
            <div>What's your name?</div>
            <input
             id="welcome-input"
             className="inputField"
             value={props.value}
             onChange={props.onChange}
             >
             </input>
        </div>
    );
}