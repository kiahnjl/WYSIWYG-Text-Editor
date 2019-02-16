// data file
// needs to be optimised for: read? write? insert? delete?
// lets try: insert. Needs to be able to insert fast and read only what changed
// make it simple

(function() {
  var Type = {
    TITLE: 0,
    BOLD: 1,
    ITALIC: 2,
    TEXT: 3,
    NEWLINE: 4
  };
  
  var Tag = {
    0: 'h1',
    1: 'strong',
    2: 'i',
    3: 'span',
    4: 'p'
  };

  var safeText = function(text) {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  
  var buildNode = function(type, text) {
    return '<' + Tag[type] + '>' + text + '</' + Tag[type] + '>';
  };

  var builder = function(content, id) {
    var curr = content[id];
    
    if(!curr.children) {
      return buildNode(curr.type, safeText(curr.text));
    } else if(curr.children) {
      return curr.children.map(function(childId) {
        return buildNode(curr.type, safeText(curr.text) + builder(content, childId));
      });
    } else if(curr.next) {
      return buildNode(curr.type, safeText(curr.text) + builder(content, curr.next));
    }
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
      return builder(Content, 0);
    };
    
    return {
      getHtml: getHtml
    }
  };
  
  window.Data = {
    create: create
  };
})();