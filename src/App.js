import React from 'react';
import pencil from './pencil.svg';
import style from './App.css';
import Injected from '../example/Hello.js';

const App = () => (
  <div className={style.app}>
    <h1 className={style.header}>
			React
      <img className={style.logo} src={pencil} />
			Sketchbook
    </h1>
    <div className={style.container}>
      <Injected />
    </div>
  </div>
);

export default App;
