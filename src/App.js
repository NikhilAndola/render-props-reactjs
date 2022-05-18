import React from 'react';
import './style.css';
import { Name } from './Name';

//Render props

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* Render props */}
      <Name name={() => 'hello brother'} />
    </div>
  );
}
