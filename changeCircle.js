// Check for current color.
// TODO: change the color.
// TODO: find a more concise way to express that.

const colors = [
    "#bf3eff",
    "#fff68f",
    "#a8251d",
];

console.log(colors);

function getBackgroundColor() {
    return window.getComputedStyle(circle).backgroundColor;
}
let kolor = getBackgroundColor()
console.log(getBackgroundColor())



// function changeColor() {
    
//     console.log("running");
//     if(document.getElementById("circle").style.backgroundColor == "#bf3eff") {
//         console.log("match");
//     } else {
//         console.log("no match")
//     }
// }