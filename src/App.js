import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ProjectsSection } from './components/Projects/Projects';
import CertificationsSlider from './components/CertificationsSlider/CertificationsSlider';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';


function App() {
  return (
  <>
  <Navbar />
   <Hero />
   <About />
   <Skills/>
  <ProjectsSection />
  <CertificationsSlider />
  <Footer />
  </>
  );
}

export default App;
