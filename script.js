console.log("Javascript is working and it's mood is fine")

let activeUser = "red";

document.getElementById("message").innerHTML = activeUser;

function switchUser(currentUser) {
    if(currentUser === "red") {
        return "blue"
    } else {
        return "red"
    }
}

function displayUser() {
    activeUser = switchUser(activeUser);
    document.getElementById("message").innerHTML = activeUser;
}
