const configWindow = {
  alwaysOnTop: true,
  hidden: true
};

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html", configWindow, function(appWin) {
    appWin.contentWindow.addEventListener("DOMContentLoaded", function(e) {
      var webview = appWin.contentWindow.document.querySelector("webview");
      webview.src = "https://youtube.com.br";

      appWin.show();
    });
  });
});
