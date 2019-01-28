import React, { Component } from 'react';
import Caret from './Caret';
import './Editor.css';
import './Renderer.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      active: false
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
    // let selection = document.getSelection();
    // let element = selection.anchorNode;
    // let index = selection.anchorOffset;
    // let text = element.textContent; // do we just want the text?
    // let html = text.substring(0, index) + text.substring(index, text.length);
  }
  
  render() {
    const { active } = this.state;
    let classes = 'editor';
    classes += active ? ' editor--active' : '';

    return (
      <div class={classes} tabIndex="0"
           onFocus={this.focusSelf} onBlur={this.blurSelf}
           onKeyDown ={this.keydownSelf} onClick={this.clickSelf}>
        <div className="renderer">
          {this.props.data.map((line, index, lines) => {
            if(index === (lines.length - 1)) {
              return (
                <p>
                  <span>{line}</span>
                  <Caret active={active}/>
                </p>
              );
            } else {
              return (<p><span>{line}</span></p>);
            }
          })}
        </div>
      </div>
    );
  }
}

export default Editor;