import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';
import Header from '../../components/Header';
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
          <Link
            to={`/blog${node.fields.slug}`}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            <g.H3>
              {node.frontmatter.title}{' '}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>{node.excerpt}</p>
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
