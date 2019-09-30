import React from 'react';
import { func, shape } from 'prop-types';
import { BlogPostTemplate } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

BlogPostPreview.propTypes = {
  entry: shape({}).isRequired,
  widgetFor: func.isRequired,
};

export default BlogPostPreview;
