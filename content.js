if (window.location.href.startsWith("https://docs.google.com/")) {
  var atag = "punch-viewer-content",
    btag = "-caption",
    ctag = "aria-setsize",
    dtag = "aria-posinset",
    msvg = document.getElementsByTagName("svg"),
    node = document.querySelectorAll('[class$="' + btag + '"]')[0],
    view = document.getElementsByClassName(atag)[0],
    size = node.getAttribute(ctag),
    data = "",
    func = () => {
      data += msvg[0].outerHTML;
      if ((i = node.getAttribute(dtag)) == size) {
        console.log(data); // この場合、出力はconsole.logにしている
      } else {
        view.click();
        setTimeout(func, 10);
      }
    };
  func();
}
