console.log("Javascript is working and in fine mood")


// Initialize counter.
let currentCounter = 0;
// Initialize counter of clicks per user.
let userClicks = {
    "Magda": 0,
    "Kamila": 0,
    "Tomek": 0,
}
console.log(userClicks)

// Display active user and counter.
document.getElementById("message").innerHTML = activeUser;
document.getElementById("span-counter").innerHTML = currentCounter;

// Get input from and use it to display welcome message on leaving focus.
function welcomeMessage() {
    let input = document.getElementById("welcome-input").value
    if(input) {
    console.log("User name is: " + input)
    document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, " + input
    } else {
        console.log("User name is unknown")
        document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, nienazwany graczu"
    }
}

// Play with a function that returns id or something.
function generateDisplay(id) {
    return function(value) {
        document.getElementById(id).innerHTML = value;    
    }
}

// // Show value of the counter.
// function counterUpdateValue(value) {
//     generateDisplay("span-counter")
// }

// Why does it work? Why do I need to assign it to a var?
let counterUpdateValue = generateDisplay("span-counter")

// Increase counter by 1.
function counterIncrementBy1() {
    currentCounter++;
    counterUpdateValue(currentCounter);
}

// Decrease counter by 1. Min. value is 0.
function counterDecrementBy1() {
    if(currentCounter > 0) {
    currentCounter--;
    counterUpdateValue(currentCounter);
    } else {}
}

// Doing countClicks in forin loop.
// TODO: why [] brackets and user? How does it work?
function countClicks(name) {
    for (user in userClicks) {
        if(name == user) {
            userClicks[user]++;
        }
    }
    lastClicked(name);
    console.log(userClicks)
}

// Counts which property of userClicks in div-'name' was clicked the last, and print that into div.
function lastClicked(name) {
    document.getElementById("div-last-selected").innerHTML = "Ostatnio kliknięty user to: " + name;
}

function changeColor() {
    
}