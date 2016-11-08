import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import style from './style.css';

console.log('styyyyyyle', style);

const Example = () => (
  <div className={style.container}>
    <Toggle
      defaultChecked={true}
      onChange={() => {
        console.log('changed')
      }}
    />
    <h1>Yo there mate</h1>
    <h2>Hello Boom</h2>
    <p>This is awesome</p>
  </div>
);

export default Example;
