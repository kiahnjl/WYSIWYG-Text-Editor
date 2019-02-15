// data file
// needs to be optimised for: read? write? insert? delete?
// lets try: insert. Needs to be able to insert fast and read only what changed
// make it simple

(function() {
  var Type = {
    TITLE: 0,
    BOLD: 1,
    ITALIC: 2
  };
  
  var Tag = {
    0: 'h1',
    1: 'strong',
    2: 'i'
  };
  
  var buildNode = function(type, text) {
    return '<' + Tag[type] + '>' + text + '</' + Tag[type] + '>';
  };
  
  var create = function() {
    var Content = {
      0: {
        type: Type.TITLE,
        text: 'My ',
        children: [1]
      },
      1: {
        type: Type.BOLD,
        text: 'Header'
      }
    };
    
    var getHtml = function() {
      var builder = function(curr) {
        if(!curr.children) {
          return buildNode(curr.type, curr.text);
        } else {
          return curr.children.map(function(childId) {
            return buildNode(curr.type, builder(Content[childId]));
          });
        }
      };
      
      return builder(Content[0]);
    };
    
    return {
      getHtml: getHtml
    }
  };
  
  window.Data = {
    create: create
  };
})();