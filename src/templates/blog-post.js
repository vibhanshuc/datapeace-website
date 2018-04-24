import React, { Component } from 'react';
import Helmet from 'react-helmet';
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

export default class extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.node.classList.remove('down');
    }, 50);
  }


  render() {
    const { markdownRemark: post } = this.props.data;

    return (
      <div>
        <Header />
        <div ref={(node) => { this.node = node; }} className="Blog down">
          <BlogPostTemplate
            content={post.htmlAst}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={<Helmet title={`Data Peace - Blog | ${post.frontmatter.title}`} />}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
          />
        </div>
      </div>
    );
  }
}

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
