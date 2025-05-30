chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "explainThis",
    title: "Explain This with ExplainThis.AI",
    contexts: ["selection"] }); 
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "explainThis") {
    chrome.storage.local.set({ selectedText: info.selectionText }, () => {
      chrome.action.openPopup();
    });
  }
});