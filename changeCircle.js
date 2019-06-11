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

// Sets the given color to the circle div.
function changeColor(newColor) {
    document.getElementById("circle").style.backgroundColor = newColor;
}

// Changes the circle div color to next in the colors array. If the last color in array is given, sets the index 0 color.
function cycleColor() {
    // Get the current color as hex.
    let currentBackground = getBackgroundColor();
    // Check the index of current color.
    let arrayIndex = colors.indexOf(currentBackground);
    // If the current color is not last item in the array, assign color under current index+1 as the new color.
    if(currentBackground !== colors[colors.length-1]) {
        changeColor(colors[arrayIndex+1]);
    } else {
        // Else, if the current color is last in array, set the new color to color under index 0.
        changeColor(colors[0]);
    }
}