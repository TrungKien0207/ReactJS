import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navv from '../Navv/Navv';
import Homee from '../Home/Homee';
import Products from '../product/Products';

function App() {
  return (
    <div>
      <Navv></Navv>
      <div>
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
