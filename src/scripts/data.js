// data file
// example
// needs to be optimised for: read? write? insert? append? delete?
// make it simple, make it html right now

(function() {
  var Data = '' +
    '<p><h1>Header</h1></p>' +
    '<p>This is plain text.<span class="text-bold">Now it is bold.</span></p>' +
    '<p>This is plain text.<span class="text-italic">Now it is italic.</span></p>' +
    '<p>Color<span style="color: red;">is red.</span></p>' +
    '';
  window.Data = Data;
})();