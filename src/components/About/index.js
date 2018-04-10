import React from 'react';
import './index.scss';

const About = () => (
  <div className="About">
    <div className="flex flex-center About-heading">
      <h2>About Us</h2>
    </div>
    <div className="About-description flex flex-col">
      <div className="flex flex-center">
        <p className="flex-50">
          <span className="primary-text">We</span> are a new age technology
          company! We are DATA WHISPERERS to the middle bulge of technology
          customers.
          <span className="border-vertical" />
        </p>
        <p className="flex-50">
          <span className="primary-text">We</span> ensure that you do not get
          overwhelmed with Volume, Velocity and Variety of Data.
        </p>
      </div>
      <div />
      <div className="flex">
        <p className="flex-50">
          <span className="primary-text">We</span> provide unmatched service
          quality experience together with an unbeatable economic proposition to
          get more and more small and medium businesses started on their data
          journeys!
          <span className="border-vertical" />
        </p>
        <p className="flex-50">
          <span className="primary-text">Our</span> interdisciplinary team of
          experts comprising managerial excellence, experience in product and
          software development, research in artificial intelligence and applied
          data science and mathematics creates best in class solutions for our
          clients.
        </p>
      </div>
    </div>
  </div>
);

export default About;
