function activeBlurowser() {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("blur-active")
}

function inactiveBlurowser() {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove("blur-active")
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.action === "activate-blurowser") {
    activeBlurowser();
    return;
  }
  inactiveBlurowser();
});
