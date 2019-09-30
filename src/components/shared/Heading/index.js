import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

const Heading = ({ title, isSmall, isLighter }) =>
  (
    <h2
      className={`heading ${isSmall ? 'small' : ''} ${isLighter ? 'lighter' : ''}`}
    >
      {title}
    </h2>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  isSmall: PropTypes.bool,
  isLighter: PropTypes.bool,
};

Heading.defaultProps = {
  isSmall: false,
  isLighter: false,
};

export default Heading;

