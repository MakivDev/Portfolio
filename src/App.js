import './styles/main.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contacts from './pages/Contacts';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
