chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "Tab updated!") {
        alert("Tab updated!");
    }
});
