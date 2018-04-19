import React from 'react';
import Link from 'gatsby-link';
import Header from '../../components/Header';
import BlogHeader from '../../components/Blog/BlogHeader';
import './index.scss';

export default ({ data }) => (
  <div>
    <Header>
      <div className="header-heading">
        <h1>Blog</h1>
      </div>
    </Header>
    <div className="BlogsList">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="BlogsList-item" key={node.id}>
          <BlogHeader title={node.frontmatter.title} date={node.frontmatter.date} />
          <p>{node.frontmatter.description}</p>
          <Link
            className="btn btn-primary"
            to={`/blog${node.fields.slug}`}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
              Read More
          </Link>
        </div>
    ))}
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
