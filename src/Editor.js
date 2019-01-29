import React, { Component } from 'react';
import Caret from './Caret';
import './Editor.css';
import './Renderer.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      cursor: {
        row: 0,
        col: 0
      }
    };
    this.focusSelf = this.focus.bind(this);
    this.blurSelf = this.blur.bind(this);
    this.keydownSelf = this.keydown.bind(this);
    this.clickSelf = this.click.bind(this);
  }

  focus() {
    this.setState({
      active: true
    });
  }

  blur() {
    this.setState({
      active: false
    });
  }

  keydown(e) {
    this.props.onType(e.key);
  }

  click(e) {
    let selection = document.getSelection();
    if(!selection.anchorNode) {
      return;
    }
    let line = findContainingLine(selection.anchorNode);
    if(!line) {
      return;
    }
    let row = getLineIndex(line);
    let col = selection.anchorOffset;
    if(row >= 0 && col >= 0) {
      this.setState({
        cursor: { row, col }
      });
    }
  }
  
  render() {
    const { active, cursor } = this.state;
    let classes = 'editor';
    classes += active ? ' editor--active' : '';

    return (
      <div class={classes} tabIndex="0"
           onFocus={this.focusSelf} onBlur={this.blurSelf}
           onKeyDown ={this.keydownSelf} onClick={this.clickSelf}>
        <div className="renderer">
          {this.props.data.map(renderLineWithCursor(cursor, active))}
        </div>
      </div>
    );
  }
}

function renderLineWithCursor(cursor, active) {
  return (line, index) => {
    if(index === cursor.row) {
      let start = line.substring(0, cursor.col);
      let end = line.substring(cursor.col);
      return (<p class="line" data-index={index}>
        <span>{start}</span>
        <Caret active={active}/>
        <span>{end}</span>
      </p>);
    }
    return (<p class="line" data-index={index}>{line}</p>);
  };
}

function getLineIndex(node) {
  let index = node.dataset.index;
  return index ? parseInt(index) : undefined;
}

function findContainingLine(node) {
  if(node === document.body) {
    return undefined;
  } else if(node.classList && node.classList.contains('line')) {
    return node;
  } else {
    return findContainingLine(node.parentNode);
  }
}

export default Editor;