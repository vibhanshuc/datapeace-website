import React from 'react';
import rehypeReact from 'rehype-react';
import { node, string } from 'prop-types';
import Footer from './Footer';

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { footer: Footer },
}).Compiler;

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: node.isRequired,
  className: string.isRequired,
};

export default Content;

export const HTMLContent = ({ content, className }) => (
  <div className={className}>{renderAst(content)}</div>
);

HTMLContent.propTypes = {
  content: node.isRequired,
  className: string.isRequired,
};
