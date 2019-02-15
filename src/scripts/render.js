// render file
// input: data structure
// output: html

(function() {
  function render(rootElement, data) {
    rootElement.innerHTML = data.getHtml();
  }
  
  window.render = render;
})();