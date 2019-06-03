console.log("Javascript is working and in fine mood")

// Initialize active user.
let activeUser = "red";
// Initialize counter.
let currentCounter = 0;

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