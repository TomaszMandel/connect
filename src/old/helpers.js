// // Return id.
// function generateDisplay(id) {
//     return function(value) {
//         document.getElementById(id).innerHTML = value;    
//     }
// }

// // From "rgb(r,g,b)" returns r,g,b as numbers.
// function rgbStrToInt(rgb) {
//     const rgbStrip = rgb.replace("rgb(", "").replace(")", "").split(", ");
//     const arr = rgbStrip.map(Number);
//     return arr;
// }

// //Convert rgb to hex.
// function componentToHex(c) {
//     let hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }

// // Converts rgb values to hex.
// function rgbToHex(rgb) {
//     const rgbArr = rgbStrToInt(rgb);
//     return "#" + componentToHex(rgbArr[0]) + componentToHex(rgbArr[1]) + componentToHex(rgbArr[2]);
// }