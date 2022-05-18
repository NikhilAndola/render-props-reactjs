import React from 'react';

export const Name = (props) => {
  return <div>Your name is: {props.name()}</div>;
};

Name.defaultProps = {
  name: 'nikhil',
};
