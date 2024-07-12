import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TransitionWrapper from './components/TransitionWrapper';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gradient-to-l from-blue-500 via-purple-700 to-blue-500">
        <Header />
        <main className="flex-grow overflow-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <TransitionWrapper>
                  <Home />
                </TransitionWrapper>
              }
            />
            <Route
              path="/projects"
              element={
                <TransitionWrapper>
                  <Projects />
                </TransitionWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <TransitionWrapper>
                  <About />
                </TransitionWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <TransitionWrapper>
                  <Contact />
                </TransitionWrapper>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
