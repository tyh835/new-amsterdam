import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Image = ({ image, alt }) => <Img fluid={image.childImageSharp.fluid} alt={alt} />

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string
};

export default Image;
