import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questionnaire from './components/Questionnaire/Questionnaire';
import RadarChart from './charts/RadarChart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/results" element={<RadarChart />} />
      </Routes>
    </Router>
  );
}

export default App;
