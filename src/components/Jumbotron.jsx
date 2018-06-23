import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';

const Jumbotron = styled.img`
  width: 100vw;
  height: auto;
  margin-top: 0;
`;

export default props => {
  const {image, isPreview} = props;
  return (
    isPreview 
      ? <Jumbotron src={image.path} alt={image.text} /> 
      : <Img sizes={image.path.childImageSharp.sizes} alt={image.text} />
    )
};