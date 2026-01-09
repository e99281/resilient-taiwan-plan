import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanDetails from './pages/PlanDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plan-details" element={<PlanDetails />} />
    </Routes>
  );
}

export default App;