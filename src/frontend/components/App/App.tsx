import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.scss';
import StartPage from '../pages/startPage/StartPage';
import FactionPage from '../pages/factionPage/FactionPage';
import RoadPage from '../pages/roadPage/RoadPage';
import Faq from '../pages/faqPage/FaqPage';
import Team from '../pages/teamPage/TeamPage';
import More from '../modules/more/More';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' index element={<StartPage />}></Route>
          <Route path='faction' element={<FactionPage />}></Route>
          <Route path='road' index element={<RoadPage />}></Route>
          <Route path='faq' element={<Faq />}></Route>
          <Route path='team' index element={<Team />}></Route>
          <Route path='more' element={<More />}></Route>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
