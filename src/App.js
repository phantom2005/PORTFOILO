import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ProjectsSection } from './components/Projects/Projects';

function App() {
  return (
  <>
  <Navbar />
  <ProjectsSection />
  <Footer />
  </>
  );
}

export default App;
