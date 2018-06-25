import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Img from 'gatsby-image';

const PreviewImg = styled.img`
  width: 100vw;
  height: auto;
  margin-top: 0;
`;

const Jumbotron = ({image, isPreview}) => {
  image.text = image.text || image.alt;
  image.path = image.path || image
  return (
    isPreview 
      ? <PreviewImg src={image.path} alt={image.text} /> 
      : <Img sizes={image.path.childImageSharp.sizes} alt={image.text} />
    )
};

Jumbotron.propTypes = {
  image: PropTypes.object.isRequired,
  isPreview: PropTypes.bool.isRequired
}

export default Jumbotron;