import React from 'react';
import './Renderer.css';

function Renderer({data}) {
  return (
    <div className="renderer">
      {data.map(line => {
        return (<p>{line}</p>);
      })}
    </div>
  );
}

export default Renderer;