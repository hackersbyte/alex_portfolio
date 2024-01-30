import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work, Blog } from './container';
import { Navbar } from './components';
import './app.scss';
function App() {
  return (
    <div className="app"> 
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills/>
    <Testimonial />
    <Blog />
    <Footer /> 
    
    </div>
  );
}

export default App