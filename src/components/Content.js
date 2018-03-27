import React from 'react';
import rehypeReact from 'rehype-react';
import Footer from './Footer';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { footer: Footer },
}).Compiler;

export default ({ content, className }) => (
  <div className={className}>{content}</div>
);

export const HTMLContent = ({ content, className }) => (
  <div className={className}>{renderAst(content)}</div>
);
