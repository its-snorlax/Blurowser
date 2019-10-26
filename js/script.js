let activated = false;
let hoverManager = null;
let elementManager = null;

function activeBlurowser() {
    elementManager = new ElementManager();
    hoverManager = new HoverManager();
    hoverManager.register((currentElement, previousElement) => {
        elementManager.onNewHover(currentElement, previousElement)
    });
    hoverManager.start();
}

function inactiveBlurowser() {
    elementManager.stop();
    hoverManager.stop()
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
