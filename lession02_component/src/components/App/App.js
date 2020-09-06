import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import BodyWelcome from '../BodyWelcome/BodyWelcome';
import Review from '../Review/Review';
import Services from '../Services/Services';

function App() {
  return (
    <div className="ctn">
        {/* Menu */}
        <Menu />
        
        {/* Header */}
        <Header />
        
        {/* Body Welcome */}
        <BodyWelcome />
        
        {/* review cake */}
        <Review />
        
        {/* main services */}
        <Services />
      
      </div>
  );
}

export default App;
