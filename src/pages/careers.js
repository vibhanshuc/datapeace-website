import React, { Component } from 'react';
import whyusImage from './why-us.png';
import ourTeamImage from './our-team.png';
import careersBackground from './careers-background.jpg';
import Header from '../components/Header';
import Heading from '../components/shared/Heading/index';
import './careers.scss';

class Careers extends Component {
  render() {
    return (
      <div className="careers">
        <Header img={careersBackground}>
          <div className="header-heading small">
            <h1>Work With Us!</h1>
            <h1>Start an exciting career at Data Peace</h1>
          </div>
        </Header>
        <div className="careers-section padded">
          <div className="flex flex-center">
            <div>
              <img className="why-us-image" alt="why us" src={whyusImage} />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-center">
                <Heading title="Why Us" />
              </div>
              <div>
                <p>
                  Data Peace aims to bridge the gap between humans and machines.
                  We see ourselves as a research organization developing
                  commercially viable products and services in the space of
                  Cloud Enablement, Deep Learning, Machine Learning & Big Data.
                  We encourage our people to dive in, roll up their sleeves and
                  take on the many opportunities bound to come their way. We
                  believe that in order to encourage an environment where
                  technology thrives we must create one where employees too.
                </p>

                <p>
                  At Data Peace we Provide our employees with the opportunity to
                  work on cutting-edge technologies in a growth conducive and
                  progressive work environment.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>
              Join us and be part of a culture that is unique in the sense that
              it’s fast-paced, oriented towards hard work , and still leaves
              room for learning and fun.
            </h3>
          </div>
        </div>
        <div className="padded dark-container">
          <div className="flex flex-center careers-section">
            <div>
              <div className="flex flex-center">
                <Heading title="Our Team" />
              </div>
              <div>
                <div className="flex flex-col flex-center">
                  <p>
                    Our team comprises of exceptional programmers having
                    hands-on experience with the latest technologies.
                  </p>
                  <p>
                    All of our team members are technology enthusiasts who share
                    our passion to shape, create and participate in the
                    enthralling technological advancements that define how
                    tomorrow will look like.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img alt="our team" src={ourTeamImage} />
            </div>
          </div>
        </div>
        <div className="careers-section padded careers-jobs">
          <div className="flex flex-center">
            <Heading title="Job Profiles" />
          </div>
          <div className="flex flex-wrap">
            <div className="flex flex-col flex-center job-post">
              <Heading title="Backend Engineer" isSmall isLighter />
              <div>
                <ul>
                  <li>Working experience with NodeJS or Python or Java</li>
                  <li>
                    Knowledge of respective web frameworks Express, Koa (NodeJS)
                    or Flask, Django (Python)
                  </li>
                  <li>
                    HTML5, CSS3 and JavaScript (ES5, ES6+) (Basic Knowledge)
                  </li>
                  <li>SQL, NoSQL databases</li>
                  <li>Git (Basic)</li>
                  <li>Pandas, Scipy, Spark, Hadoop (Basic Knowledge)</li>
                  <li>
                    Familiarity with Linux, basic knowledge of bash scripting
                    will be a plus
                  </li>
                  <li>Knowledge of HTTP, REST</li>
                  <li>Knowledge of NGINX, APACHE</li>
                  <li>
                    Basic knowledge of Cloud Infrastructure (AWS, AZURE or
                    Google Cloud)
                  </li>
                  <li>Sense of how all of these things fit together</li>
                </ul>
                <div className="flex flex-col flex-center">
                  <Heading title="Business Manager" isSmall isLighter />
                  <div>
                    <ul>
                      <li>Basic knowledge of Microsoft Products</li>
                      <li> Primary & Secondary research capabilities.</li>
                      <li> Sound Communication Skills</li>
                      <li>
                        Candidates with content writing skills will be
                        preferred.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-center job-post">
              <Heading title="Frontend Engineer" isSmall isLighter />
              <div>
                <ul>
                  <li>
                    Good knowledge of HTML5, CSS3, JavaScript (ES5, ES6+) and
                    jQuery
                  </li>

                  <li>
                    Experience at least one modern JavaScript Framework e.g.
                    ReactJS (preference), Angular 2+ or Vue
                  </li>

                  <li> Knowledge of CSS pre-processing tools SASS, STYLUS</li>

                  <li>
                    Knowledge of NPM and NodeJs based tools like Webpack, gulp,
                    browserify, babel
                  </li>

                  <li> Knowledge of versioning tool Git</li>

                  <li>
                    Familiarity with Linux, basic knowledge of bash scripting
                    will be a plus
                  </li>

                  <li> Basics of HTTP, REST</li>

                  <li> Know how of server side technologies work</li>

                  <li>
                    Basic knowledge of Cloud Infrastructure will be a plus (AWS,
                    AZURE or Google Cloud)
                  </li>

                  <li>
                    Good understanding of asynchronous request handling, partial
                    page updates, and AJAX
                  </li>

                  <li>
                    Basic knowledge of image authoring tools, to be able to
                    crop, resize, or perform small adjustments on an image.
                    Familiarity with tools such as as Gimp or Photoshop is a
                    plus.
                  </li>

                  <li> Sense of how all of these things fit together.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSelOVNRemn_i07xFumLj_w_JHk7OvLKy2A2NvgAOxbmJwbrvw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-button"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;
