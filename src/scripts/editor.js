// main file

(function() {
  window.Editor = {
    init: init
  };
  
  function onKeyDown(e) {
    // add, move cursor, specials
  }

  function onMouseUp(e) {
    // set cursor
  }

  function init(htmlElement) {
    htmlElement.classList.add("editor");
    htmlElement.setAttribute("tabindex", "0");
    htmlElement.addEventListener('keydown', onKeyDown);
    htmlElement.addEventListener('mouseup', onMouseUp);
    window.render(htmlElement, window.Data.create());
  }
})();