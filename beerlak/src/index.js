import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from './data/beers.json';
import MenuElement from './components/MenuElement';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Landing />
    <MenuElement beersData = {data} />
    <Cart />
  </React.StrictMode>
);