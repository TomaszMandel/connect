import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

console.log("Javascript is working and in fine mood")

const USER = {
    name: "Tomek", 
    age: "222",
}

ReactDOM.render(<App user={USER} />, document.getElementById("app"));