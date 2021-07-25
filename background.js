chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    name: "default",
  });
});

chrome.storage.local.get("name", (data) => {});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // console.log('tabId', tabId);
  // console.log('changeInfo', changeInfo);
  // console.log('tab', tab);
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./foreground.js"],
      })
      .then(() => {
        console.log("my ext: injected foreground script.");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
