import React from 'react';
import { graphql } from 'gatsby';
import * as PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import './index.scss';

const IndexPage = ({ data }) => (
  <Layout data={data}>
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
      <div className="padded" id="contact">
        <div className="margin-auto">
          <Contact />
        </div>
      </div>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        meta {
          name
          content
        }
      }
    }
  }
`;
