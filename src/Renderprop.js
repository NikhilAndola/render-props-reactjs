import React from 'react';

export const Renderprop = (props) => {
  const [count, setCount] = React.useState(0);

  const clickHandler = () => {
    return setCount(count + 1);
  };
  return (
    <>
      <div>{props.render(count, clickHandler)}</div>
    </>
  );
};
