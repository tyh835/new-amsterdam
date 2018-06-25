import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Img from 'gatsby-image';

const PreviewImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 0;
`;

const Jumbotron = ({image, alt, isPreview}) => {
  return (
    isPreview 
      ? <PreviewImg src={image} alt={alt} /> 
      : <Img sizes={image.childImageSharp.sizes} alt={alt} />
    )
};

Jumbotron.propTypes = {
  image: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  isPreview: PropTypes.bool.isRequired
}

export default Jumbotron;