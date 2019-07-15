import React, {useState} from 'react';

export const InputCommon = () => {
    const [value, setValue] = useState('a')

    return (
        <div><span>test</span>
        <input
        className="input-common"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ></input>
        </div>
    )
}