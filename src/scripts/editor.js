// main file

(function() {
  window.Editor = {
    init: init
  };

  function init(htmlElement) {
    htmlElement.classList.add("editor");
    window.render(htmlElement, window.Data);
  }
})();