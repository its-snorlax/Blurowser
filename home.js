let blur = document.getElementById("blur");
let noBlur = document.getElementById("noBlur");

blur.onclick = function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "blur(10px)";'});
    });
};

noBlur.onclick = function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.filter = "blur(0px)";'});
    });
}