chrome.storage.local.get(["selectedText"], (result) => {
  const text = result.selectedText;
  document.getElementById("explanation").innerText =
    `🔍 You highlighted: "${text}"\n\n Explanation: This is a placeholder. Real explanation coming soon!`;
});
