
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Land from './pages/Land';
import Rental from './pages/Rental';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-slate-800 font-sans min-h-screen flex flex-col selection:bg-amber-500 selection:text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/land" element={<Land />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
