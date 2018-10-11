import React from 'react';
import PropTypes from 'prop-types';

import Image from 'gatsby-image';

const Image = ({ image, alt }) => <Image fluid={image.childImageSharp.fluid} alt={alt} />

Image.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
};

export default Image;
