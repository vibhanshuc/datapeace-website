import React from 'react';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Header from '../components/Header';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="Blog">
      {helmet || ''}
      <div>
        <div>
          <div>
            <h1 className="title">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default (props) => {
  const { markdownRemark: post } = props.data;

  return (
    <div>
      <Header />
      <BlogPostTemplate
        content={post.htmlAst}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
        title={post.frontmatter.title}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
