import React from 'react';
import './index.scss';

const BlogHeader = ({ date, title }) => (
  <div className="Blog-header flex">
    <img src="/img/ravi.jpg" alt="avatar" />
    <div className="BlogsList-item-header">
      <div className="flex">
        <h5>Ravi Naval</h5>
        <h5>{date}</h5>
      </div>
      <h1>
        {title}{' '}
      </h1>
    </div>
  </div>
);

export default BlogHeader;
