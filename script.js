import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './src/components/App/app';
import { InputField } from './src/components/NameInput/nameInput';

console.log("Javascript is working and in fine mood")

// const USER = {
//     name: "Tomek", 
//     age: "222",
// }

// ReactDOM.render(<App user={USER} />, document.getElementById("app"));
// ReactDOM.render(
//     <InputField />, document.getElementById("name-input")
// )

// class App extends React.Component {
//     render() {
//         return (
//             <InputField />
//         );
//     };
// }

ReactDOM.render(<App />, document.getElementById('root'))