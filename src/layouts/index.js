import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-solarizedlight.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Data Peace"
      meta={[
        {
          name: 'description',
          content:
            'We are focused on bringing the promise of the CLOUD and AI to all' +
            ' enterprises- sizes no bar! We work with our clients to create solutions that are optimal,' +
            ' sustainable and economical. We are adept at working with all varieties, velocities and' +
            ' volumes of data- an answer to evolving realties of modern day businesses. We have partnered ' +
            'with leading CLOUD ecosystems to craft successful CLOUD and data journeys for our clients. ',
        },
        {
          name: 'keywords',
          content:
            'Computer Vision, Deep Learning, Machine Learning, Big Data, Analytics, Data Lake' +
            ', AWS, GCP, AZURE',
        },
      ]}
    />
    <div>{children()}</div>
    <div className="padded" id="contact">
      <div className="margin-auto">
        <Contact />
      </div>
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
