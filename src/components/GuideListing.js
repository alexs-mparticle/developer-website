import './GuideListing.scss';

import Container from './Container';
import GuideTile from './GuideTile';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

const GuideListing = ({
  heading,
  description,
  guides,
  className,
  listClassName,
  tileClassName,
}) => (
  <div className={cx('GuideListing', className)}>
    <Container>
      <h1 className="GuideListing-heading">{heading}</h1>
      <p className="GuideListing-description">{description}</p>
      <div className={cx('GuideListing-list', listClassName)}>
        {guides.map((guide, index) => (
          <GuideTile className={tileClassName} key={index} {...guide} />
        ))}
      </div>
    </Container>
  </div>
);

GuideListing.propTypes = {
  className: PropTypes.string,
  listClassName: PropTypes.string,
  tileClassName: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  guides: PropTypes.arrayOf(
    PropTypes.shape({
      minutes: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GuideListing;
