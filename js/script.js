let activated = false;
let hoverManager = null;
let elementManager = null;
let originalOnKeyDown = null

function activeBlurowser() {
    originalOnKeyDown = window.onkeydown;
    window.onkeydown = onKeyDown;
    elementManager = new ElementManager();
    hoverManager = new HoverManager();
    hoverManager.register((currentElement, previousElement) => {
        elementManager.onNewHover(currentElement, previousElement)
    });
    hoverManager.start();
}

function inactiveBlurowser() {
    elementManager.stop();
    hoverManager.stop();
    window.onkeydown = originalOnKeyDown;
}

function onKeyDown(event) {
    if (event.key === "Escape") {
        inactiveBlurowser();
    }
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
