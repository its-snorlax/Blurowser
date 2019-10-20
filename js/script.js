let currentElement = null;
let originalOnMouseOver;
let activated = false;

function activeBlurowser() {
    originalOnMouseOver = window.onmouseover;
    window.onmouseover = function (e) {
        const newElement = e.target;
        if (currentElement) {
            currentElement.classList.remove("element-selector");
        }
        currentElement = newElement;
        currentElement.classList.add("element-selector");
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
