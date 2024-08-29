import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Edu from './components/Education';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

import Design from './projects/Design';
import Django from './projects/Django';
import Reacts from './projects/React';

import './App.css'; // Ensure this includes your transition styles

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <div>
          <NavBar />
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/design" element={<Design />} />
            <Route path="/django" element={<Django />} />
            <Route path="/react" element={<Reacts />} />
            <Route path="/education" element={<Edu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
