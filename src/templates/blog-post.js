import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { node, shape, string } from 'prop-types';
import Content, { HTMLContent } from '../components/Content';
import BlogHeader from '../components/Blog/BlogHeader';
import Header from '../components/Header';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      {helmet || ''}
      <div>
        <div>
          <div>
            <BlogHeader title={title} date={date} />
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: node.isRequired,
  contentComponent: node.isRequired,
  description: node.isRequired,
  helmet: node.isRequired,
  title: string.isRequired,
  date: string.isRequired,
};

export default class BlogPost extends Component {
  static propTypes = {
    data: shape({}).isRequired,
  };

  componentDidMount() {
    setTimeout(() => {
      this.node.classList.remove('down');
    }, 50);
  }

  render() {
    const { data } = this.props;
    const { markdownRemark: post } = data;

    return (
      <div>
        <Header />
        <div
          ref={ref => {
            this.node = ref;
          }}
          className="Blog down"
        >
          <BlogPostTemplate
            content={post.htmlAst}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet title={`Data Peace - Blog | ${post.frontmatter.title}`} />
            }
            title={post.frontmatter.title}
            date={post.frontmatter.date}
          />
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  data: shape({}).isRequired,
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
