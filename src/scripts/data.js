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
    LINE: 4
  };
  
  var Tag = {
    0: 'h1',
    1: 'strong',
    2: 'i',
    3: 'span',
    4: 'div'
  };

  var safeText = function(text) {
      return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };
  
  var buildNode = function(type, text, id) {
    var dataId = (id !== undefined) ? ' data-id="' + id + '" ' : '';
    return '<' + Tag[type] + dataId + '>' + text + '</' + Tag[type] + '>';
  };

  var builder = function(content, id) {
    var curr = content[id];
    
    if(!curr.children) {
      return buildNode(curr.type, safeText(curr.text), id);
    }

    var html = '';

    if(curr.children) {
      var children = curr.children.reduce(function(res, childId) {
        return res + builder(content, childId);
      }, '');
      html = buildNode(curr.type, safeText(curr.text) + children, id);
    }

    if(curr.next) {
      html += builder(content, curr.next);
    }

    return html;
  };
  
  var create = function() {
    var Content = {
      0: {
        type: Type.LINE,
        text: '',
        children: [1],
        next: 3
      },
      1: {
        type: Type.TITLE,
        text: 'My ',
        children: [2]
      },
      2: {
        type: Type.BOLD,
        text: 'Header'
      },
      3: {
        type: Type.LINE,
        text: 'Hello world'
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