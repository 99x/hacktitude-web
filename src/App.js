import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import Intro from './components/Intro';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section31 from './components/Section3-1';
import Section32 from './components/Section3-2';
import Section33 from './components/Section3-3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

function App() {
  return (
    <div id="wrapper"> 
      <Header />
      <Nav />
      <div id="main">
        <Intro />
        <Section1 />
        <Section2 />
        <Section31 />
        <Section32 />
        <Section33 />
        <Section4 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
