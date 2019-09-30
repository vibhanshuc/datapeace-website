import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-solarizedlight.css';
import Footer from './Footer';
import '../layouts/index.scss';

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={data.site.siteMetadata.meta}
    />
    <div>{children}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
};

export default TemplateWrapper;
