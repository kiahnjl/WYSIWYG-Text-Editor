// render file
// input: data structure
// output: html

(function() {
  function render(rootElement, structure) {
    rootElement.innerHTML = structure;
  }
  
  window.render = render;
})();