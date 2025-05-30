chrome.storage.local.get(["selectedText"], (result) => {
  const text = result.selectedText;
  const explanationElement = document.getElementById("explanation");
  explanationElement.innerText = "Explaining...";
  fetch("http://127.0.0.1:8000/explain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
    .then(response => response.json())
    .then(data => {
      explanationElement.innerText = `${data.explanation}`;
    })
    .catch(err => {
      explanationElement.innerText = "Failed to fetch explanation.";
      console.error(err);
    });
});