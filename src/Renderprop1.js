import React from 'react';

export const Renderprop1 = (props) => {
  return (
    <>
      <div>{props.render(count, clickHandler)}</div>
    </>
  );
};
