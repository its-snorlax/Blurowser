let previousElement = null;
let onmouseover = window.onmouseover;

function activeBlurowser() {
    window.onmouseover = function (e) {
        const currentElement = e.target;
        if (previousElement === null) {
            currentElement.classList.add("element-selector");
            previousElement = currentElement;
        } else {
          currentElement.classList.add("element-selector");
            previousElement.classList.remove("element-selector");
            previousElement = currentElement
        }
    }
}

function inactiveBlurowser() {
  window.onmouseover = onmouseover
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "activate-blurowser") {
      activeBlurowser();
        return;
    }
  inactiveBlurowser();
});
