import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.scss';
import Menu from '../modules/more/More';

function App() {


  return (
    <div className="App">
      <main>
        <div className="hello">
          <Menu />
        </div>

      </main>
    </div>


  );
}

export default App;
