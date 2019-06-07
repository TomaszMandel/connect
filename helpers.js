// Return id.
function generateDisplay(id) {
    return function(value) {
        document.getElementById(id).innerHTML = value;    
    }
}

// From "rgb(r,g,b)" returns r,g,b as numbers.
function rgbStrToInt(rgb) {
    return rgb.replace("rgb(", "").replace(")", "")
}


//Convert rgb to hex.
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// Converts rgb values to hex.
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(191, 62, 255))