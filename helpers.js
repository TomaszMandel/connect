// Return id.
function generateDisplay(id) {
    return function(value) {
        document.getElementById(id).innerHTML = value;    
    }
}

