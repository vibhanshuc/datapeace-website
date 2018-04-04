import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-solarizedlight.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Data Peace"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
      <Footer/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
