// Initialize colors array.
const colors = [
    "#bf3eff",
    "#fff68f",
    "#a8251d",
];
console.log(colors);

// Returns current background color and converts it from rgb to hex.
function getBackgroundColor() {
    let rgb = window.getComputedStyle(circle).backgroundColor;
    return rgbToHex(rgb);
}

// // Changes colors of circle. If last element of array is active, changes to first element. Otherwise, changes to next in the array.
// function changeColor() {
//     console.log("running");
//     let currentBackground = getBackgroundColor();
//     console.log(currentBackground);
//     if(currentBackground == colors[colors.length-1] {

//     }
// }