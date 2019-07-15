// // Initialize counter of clicks per user.
// let userClicks = {
//     "Magda": 0,
//     "Kamila": 0,
//     "Tomek": 0,
// }

// // Get input from and use it to display welcome message on leaving focus.
// function welcomeMessage() {
//     let input = document.getElementById("welcome-input").value
//     if(input) {
//     console.log("User name is: " + input)
//     document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, " + input
//     } else {
//         console.log("User name is unknown")
//         document.getElementById("div-welcome-message").innerHTML = "Siadaj do gry, nienazwany graczu"
//     }
// }

// // Doing countClicks in forin loop.
// function countClicks(name) {
//     for (user in userClicks) {
//         if(name == user) {
//             userClicks[user]++;
//         }
//     }
//     lastClicked(name);
//     console.log(userClicks)
// }

// // Counts which property of userClicks in div-'name' was clicked the last, and print that into div.
// function lastClicked(name) {
//     document.getElementById("div-last-selected").innerHTML = "Ostatnio kliknięty user to: " + name;
// }