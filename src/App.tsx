import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Divisions } from './components/sections/Divisions';
import { Projects } from './components/sections/Projects';
import { Careers } from './components/sections/Careers';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    document.title = 'Lavitsolution Pvt India - Powering Possibilities';
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Divisions />
          <Projects />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
