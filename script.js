console.log("Javascript is working and in fine mood")

// Initialize active user.
let activeUser = "red";
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
    input = document.getElementById("welcome-input").value
    if(input) {
    console.log("User name is: " + input)
    document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, " + input
    } else {
        console.log("User name is unknown")
        document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, nienazwany graczu"
    }
}

// Switch current user to the opposite one. Red to blue, and otherwise.
function switchUser(currentUser) {
    if(currentUser === "red") {
        return "blue"
    } else {
        return "red"
    }
}

// Put the current value to user.
function displayUser() {
    activeUser = switchUser(activeUser);
    document.getElementById("message").innerHTML = activeUser;
}

// Show value of the counter.
function counterUpdateValue(value) {
    document.getElementById("span-counter").innerHTML = value;
}

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

// Count clicks on userClicks properties on div-'name'.
// TODO: instead of doing ifs, think how to just update the desired property.
function countClicks(name) {
    if(name == "Magda") {
        userClicks.Magda++;
    } else if(name == "Kamila") {
        userClicks.Kamila++;
    } else {
        userClicks.Tomek++;
    }
 console.log(userClicks)
}

// Puts the number of clicks and last clickedto div.
function lastClicked(name) {

}