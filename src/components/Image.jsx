import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GatsbyImg from 'gatsby-image';

const PreviewImg = styled.img`
  width: 100%;
  height: auto;
`;

const Image = ({ image, alt, isPreview }) => {
  return isPreview ? (
    <PreviewImg src={image} alt={alt} />
  ) : (
    <GatsbyImg sizes={image.childImageSharp.sizes} alt={alt} />
  );
};

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  isPreview: PropTypes.bool.isRequired
};

export default Image;
