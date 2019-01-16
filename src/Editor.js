import React, { Component } from 'react';
import Caret from './Caret';
import Renderer from './Renderer';
import './Editor.css';

class Editor extends Component {
  constructor() {
    super();
    this.state = {
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
    this.props.onType(e.key);
  }
  
  render() {
    let classes = 'editor';
    classes += this.state.active ? ' editor--active' : '';
    //<Caret active={this.state.active}/>
    return (
      <div class={classes} tabIndex="0"
           onFocus={this.focusSelf} onBlur={this.blurSelf} onKeyDown={this.keydownSelf}>
        <Renderer data={this.props.data}/>
      </div>
    );
  }
}

export default Editor;