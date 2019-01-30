import React from 'react';
import './Line.css';

function Line({ index, children }) {
  return (<p className="line" data-index={index}>{children}</p>);
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

function getLineIndex(node) {
  let index = node.dataset.index;
  return index ? parseInt(index) : undefined;
}

export default Line;
export { findContainingLine, getLineIndex };