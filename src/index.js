import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './Component/Component';
// import Slide2 from './Slide2/Slide2';
import Router from './Router';
import Fav from './Favpage/Fav';
import Cycles from '../src/Products/Cycles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router/>
    {/* <Component/> */}
    {/* <Cycles/> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
