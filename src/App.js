import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ProjectsSection } from './components/Projects/Projects';
import CertificationsSlider from './components/CertificationsSlider/CertificationsSlider';

function App() {
  return (
  <>
  <Navbar />
  <ProjectsSection />
  <CertificationsSlider />
  <Footer />
  </>
  );
}

export default App;
