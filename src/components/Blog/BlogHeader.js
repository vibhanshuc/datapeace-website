import React from 'react';
import Link from 'gatsby-link';
import './index.scss';
import { string } from 'prop-types';

const BlogHeader = ({ date, title, link }) => (
  <div className="Blog-header flex">
    {/* <img src="/img/ravi.jpg" alt="avatar" /> */}
    <div className="BlogsList-item-header">
      <h1>
        <Link to={link}>{title}</Link>
      </h1>
      <div className="flex">
        <h5>Data Peace Team</h5>
        <h5>{date}</h5>
      </div>
    </div>
  </div>
);

BlogHeader.propTypes = {
  date: string.isRequired,
  title: string.isRequired,
  link: string.isRequired,
};

export default BlogHeader;
