import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Використовуємо Routes замість Switch
import Navbar from './components/navbar/Navbar';
import './styles/main.css'
import Lab1 from './components/Pages/Lab1/lab1'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/lab1" element={<Lab1 />} /> {/* Використовуємо 'element' для рендеру компонента Lab1 */}
      </Routes>
    </Router>
  );
};

export default App;
