import React from 'react'

import {About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './app.scss';
function App() {
  return (
    <div classname="app"> 
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills/>
    <Testimonial />
    <Footer /> 
    
    </div>
  );
}

export default App