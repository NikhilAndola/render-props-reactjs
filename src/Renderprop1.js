import React from 'react';

export const Renderprop1 = ({ count, clickHandler }) => {
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={clickHandler}>Click me</button>
      </div>
    </>
  );
};
