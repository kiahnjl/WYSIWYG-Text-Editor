import React from 'react';
import './Caret.css';

function Caret({ active }) {
  let classes = 'caret';
  classes += active ? ' caret--active' : ' caret--inactive';

  return (
    <div class={classes}></div>
  );
}

export default Caret;