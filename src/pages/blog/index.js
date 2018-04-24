import React from 'react';
import Link from 'gatsby-link';
import FaDoubleAngle from 'react-icons/lib/fa/angle-double-right';
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
          <BlogHeader title={node.frontmatter.title} date={node.frontmatter.date} link={`/blog${node.fields.slug}`} />
          <p>{node.frontmatter.description}
            <Link
              className="ReadMore"
              to={`/blog${node.fields.slug}`}
              css={{ textDecoration: 'none', color: 'inherit' }}
            >
              Read More <FaDoubleAngle />
            </Link>
          </p>

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
