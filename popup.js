document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("startBtn").addEventListener("click", function() {
      chrome.runtime.sendMessage({action: "startCapture"}, function(response) {
        console.log(response.result);
      });
    });
  });
  