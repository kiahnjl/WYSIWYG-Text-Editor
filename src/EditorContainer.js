import React, { Component } from 'react';
import Editor from './Editor';

class EditorContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.selfOnType = this.onType.bind(this);
  }

  onType(key) {
    this.setState((state) => ({
      text: state.text + key
    }));
  }
  
  render() {
    return (
      <Editor text={this.state.text} onType={this.selfOnType}/>
    );
  }
}

export default EditorContainer;