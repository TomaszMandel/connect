import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './src/components/App/app';
// import { InputField } from './src/components/NameInput/inputField';

console.log("Javascript up")

// const USER = {
//     name: "Tomek", 
//     age: "222",
// }

// ReactDOM.render(<App user={USER} />, document.getElementById("app"));
// ReactDOM.render(
//     <InputField />, document.getElementById("name-input")
// )

ReactDOM.render(<App />, document.getElementById('root'))