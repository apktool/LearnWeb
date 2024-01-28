let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.svg") {
        myImage.setAttribute("src", "images/css-declaration-small.png")
    } else {
        myImage.setAttribute("src", "images/firefox-icon.svg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please input your name");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = "Hello , " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Hello , " + storedName;
}

myButton.onclick = function () {
    setUserName();
}