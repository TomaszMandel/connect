console.log("Javascript is working and it's mood is fine")

// Initialize active user.
let activeUser = "red";
// Initialize counter.
let currentCounter = 0;

// Display active user and counter.
document.getElementById("message").innerHTML = activeUser;
document.getElementById("span-counter").innerHTML = currentCounter;

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

// Increase counter by 1.
function counterIncrementBy1() {
    currentCounter++;
    document.getElementById("span-counter").innerHTML = currentCounter;
}

// Decrease counter by 1.
function counterDecrementBy1() {
    currentCounter--;
    document.getElementById("span-counter").innerHTML = currentCounter;
}