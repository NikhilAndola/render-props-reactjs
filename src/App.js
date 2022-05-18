import React from 'react';
import './style.css';
import { Name } from './Name';
import { Renderprop } from './Renderprop';
import { Renderprop1 } from './Renderprop1';

//Render props

export default function App() {
  return (
    <div>
      <h1>Render Props in React JS!</h1>
      {/* Render props */}
      <Name name={() => 'hello brother'} />

      <Renderprop
        render={(count, clickHandler) => (
          <Renderprop1 count={count} clickHandler={clickHandler} />
        )}
      />
    </div>
  );
}
