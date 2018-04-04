import React from 'react';
import './index.scss';
import Skills from '../components/Skills';
import About from '../components/About';
import Clients from '../components/Clients';

const IndexPage = () => (

  <div>
    <div className="margin-auto">
      <Skills />
    </div>
    <div className="dark-container">
      <div className="margin-auto">
        <About />
      </div>
    </div>
    <div className="margin-auto">
      <Clients />
    </div>
  </div>
);

export default IndexPage;
