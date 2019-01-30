import React from 'react';
import './Caret.css';

function Caret({ visible }) {
  let classes = 'caret';
  classes += visible ? ' caret--show' : ' caret--hide';
  return (<span className={classes}/>);
}

export default Caret;