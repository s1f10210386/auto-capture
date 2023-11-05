chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "startCapture") {
      // ここにcaptureのロジック
      chrome.tabs.executeScript({
        code: `// JavaScript code here`
      }, function(results) {
        // コードの実行結果はresultsに格納される
        sendResponse({result: "Script executed"});
      });
  
      return true;
    }
  });
  
  