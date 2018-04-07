import React from 'react';
import './index.scss';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

const IndexPage = () => (
  <div>
    <div className="margin-auto padded" id="skills">
      <Skills />
    </div>
    <div className="dark-container padded" id="about">
      <div className="margin-auto">
        <About />
      </div>
    </div>
    <div className="padded" id="contact">
      <div className="margin-auto">
        <Contact />
      </div>
    </div>
  </div>
);

export default IndexPage;
