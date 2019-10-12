chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: command}, function (response) {
        });
    });
});


chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({})
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});
