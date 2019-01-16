import React, { Component } from 'react';
import Caret from './Caret';
import './Editor.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      active: false
    };
    this.focusSelf = this.focus.bind(this);
    this.blurSelf = this.blur.bind(this);
    this.keydownSelf = this.keydown.bind(this);
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
    // check other special keys
    if(e.key !== 'Tab') {
      e.persist();
      this.setState((state) => ({
        text: state.text + e.key
      }));
    }
  }
  
  render() {
    let classes = 'editor';
    classes += this.state.active ? ' editor--active' : '';
    
    return (
      <div class={classes} tabIndex="0"
           onFocus={this.focusSelf} onBlur={this.blurSelf} onKeyDown={this.keydownSelf}>
        {this.state.text}
        <Caret active={this.state.active}/>
      </div>
    );
  }
}

export default Editor;