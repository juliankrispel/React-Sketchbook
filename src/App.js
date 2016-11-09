import React, { Component } from 'react';
import pencil from './pencil.svg';
import style from './App.css';
import Injected from '../../regenwald/src/app/components/Settings/__story__/index.js';

const App = () => (
  <div className={style.app}>
    <h1 className={style.header}>
			React
      <img className={style.logo} height="80px" src={pencil} />
			Sketchbook
    </h1>
    <div className={style.container}>
      <Injected />
    </div>
  </div>
);

export default App;
