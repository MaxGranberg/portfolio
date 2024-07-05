import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TransitionWrapper from './components/TransitionWrapper';
import './index.css';
import './components/TransitionWrapper'; // Ensure CSS is imported

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col relative bg-gradient-to-l from-blue-500 via-purple-700 to-blue-500">
        <Header />
        <main className="flex-grow overflow-hidden relative">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
