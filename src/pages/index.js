import React from 'react';
import './index.scss';
import Header from '../components/Header';
import Skills from '../components/Skills';
import About from '../components/About';

const IndexPage = () => (
  <div>
    <Header>
      <div className="header-heading">
        <h1>We engineer</h1>
        <h1>your data journey</h1>
      </div>
    </Header>
    <div className="margin-auto padded" id="services">
      <Skills />
    </div>
    {/* <div className="padded" id="about"> */}
    {/* <div className="margin-auto"> */}
    {/* <Clients /> */}
    {/* </div> */}
    {/* </div> */}
    <div className="dark-container padded" id="about">
      <div className="margin-auto">
        <About />
      </div>
    </div>
  </div>
);

export default IndexPage;
