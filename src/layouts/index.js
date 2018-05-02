import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-solarizedlight.css';
import Footer from '../components/Footer';

import './index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
