import React from 'react';
import './App.css';
import Navv from '../Navv/Navv';
import RouterURL from '../RouterURL/RouterURL';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navv></Navv>
        <div>
          <RouterURL></RouterURL>
        </div>
      </div>
    </Router>
  );
}

export default App;
