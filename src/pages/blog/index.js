import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import { MdPanoramaWideAngle } from 'react-icons/md';
import Helmet from 'react-helmet';
import { shape } from 'prop-types';
import Header from '../../components/Header';
import BlogHeader from '../../components/Blog/BlogHeader';
import './index.scss';

const BlogIndex = ({ data }) => (
  <div>
    <Helmet title="Data Peace | Blog" />
    <Header>
      <div className="header-heading">
        <h1>Blog</h1>
      </div>
    </Header>
    <div className="BlogsList">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="BlogsList-item" key={node.id}>
          <BlogHeader
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            link={`/blog${node.fields.slug}`}
          />
          <p>
            {node.frontmatter.description}
            <Link
              className="ReadMore"
              to={`/blog${node.fields.slug}`}
              css={{ textDecoration: 'none', color: 'inherit' }}
            >
              Read More 
              {' '}
              <MdPanoramaWideAngle />
            </Link>
          </p>
        </div>
      ))}
    </div>
  </div>
);

BlogIndex.propTypes = {
  data: shape({}).isRequired,
};

export default BlogIndex;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
