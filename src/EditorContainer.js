import React, { Component } from 'react';
import Editor from './Editor';

class EditorContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [''],
      text: ''
    };
    this.selfOnType = this.onType.bind(this);
  }

  onType(key) {
    console.log(key);

    this.setState((state) => ({
      data: getNextData(state.data, key),
      text: state.text + key
    }));
  }
  
  render() {
    return (
      <Editor data={this.state.data} onType={this.selfOnType}/>
    );
  }
}

function getNextData(data, key) {
  if(key === 'Enter') {
    data.push('');
    return data;
  } else if(key === 'Backspace' || key === 'Shift') {
    return data;
  }
  
  let index = data.length === 0 ? 0 : data.length - 1;

  data[index] = data[index] || '';
  data[index] += key;
  
  console.log(data);
  
  return data;
}

export default EditorContainer;