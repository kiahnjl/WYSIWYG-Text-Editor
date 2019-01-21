import React, { Component } from 'react';
import Editor from './Editor';

/*
 * Data.
 * How should the data of a text editor be stored?
 * What does the data structure look like?
 * What are the concerns for the structure?
 * - need to be able to delete/insert at any point
 * - need to be able to delete/insert ranges of text
 *
 * pros/cons:
 * plain text:
 * - slow delete/insert in middle?
 * - simple
 * - easy view, easy transform
 *
 * tree:
 * - how is it a tree structure?
 *
 * array:
 * - fast access to any row
 *
 * other:
 * ?
 * */

class EditorContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: ['']
    };
    this.selfOnType = this.onType.bind(this);
  }

  onType(key) {
    this.setState((state) => ({
      data: getNextData(state.data, key)
    }));
  }
  
  render() {
    return (
      <Editor data={this.state.data} onType={this.selfOnType}/>
    );
  }
}

function getNextData(data, key) {
  // index should be the cursor position
  let index = Math.max(0, data.length - 1);

  if(key === 'Enter') {
    data.push('');
    return data;
  } else if(key === 'Shift' || key === 'Meta') {
    return data;
  } else if(key === 'Backspace') {
    if(data[index].length > 0) {
      data[index] = data[index].substring(0, data[index].length - 1);
    } else if(data.length > 1) {
      data.splice(index, 1);
    }
    return data;
  } else {
    data[index] = data[index] || '';
    data[index] += key;

    return data;
  }
}

export default EditorContainer;