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
function countClicks(name) {
    if(name == "Magda") {
        userClicks.Magda++;
    } else if(name == "Kamila") {
        userClicks.Kamila++;
    } else {
        userClicks.Tomek++;
    }
    lastClicked(name);
    console.log(userClicks)
}

// // Doing countClicks in forin loop.
// // TODO: how to increment a property?
// function countClicks(name) {
//     for (user in userClicks) {
//         if(name == user) {
//             userClicks.name++;
//         }
//     }
//     lastClicked(name);
//     console.log(userClicks)
// }

// Counts which property of userClicks in div-'name' was clicked the last, and print that into div.
function lastClicked(name) {
    document.getElementById("div-last-selected").innerHTML = "Ostatnio kliknięty user to: " + name;
}