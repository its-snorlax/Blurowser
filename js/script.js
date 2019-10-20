let previousElement = null;
let currentElement = null;
let originalOnMouseOver;
let activated = false;

function activeBlurowser() {
    originalOnMouseOver = window.onmouseover;
    window.onmouseover = function (e) {
        currentElement = e.target;
        if (previousElement === null) {
            currentElement.classList.add("element-selector");
            previousElement = currentElement;
        } else {
            currentElement.classList.add("element-selector");
            previousElement.classList.remove("element-selector");
            previousElement = currentElement
        }
        currentElement.addEventListener("click", function () {
            currentElement.classList.add("blur-active")
        })
    }
}

function inactiveBlurowser() {
    currentElement.classList.remove("element-selector");
    window.onmouseover = originalOnMouseOver
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "toggle-blurowser") {
            if (activated === false) {
                activeBlurowser();
            } else {
                inactiveBlurowser();
            }
            activated = !activated
        }
    }
);
