import React, { Component } from 'react';
import Caret from './Caret';
import './Editor.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.focusSelf = this.focus.bind(this);
    this.blurSelf = this.blur.bind(this);
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
  
  render() {
    let classes = 'editor';
    classes += this.state.active ? ' editor--active' : '';
    
    return (
      <div class={classes} tabindex="0" onFocus={this.focusSelf} onBlur={this.blurSelf}>
        <Caret active={this.state.active}/>
      </div>
    );
  }
}

export default Editor;