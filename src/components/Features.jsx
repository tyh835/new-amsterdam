import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.image}>
        <p>
          <Img resolutions={item.image.childImageSharp.resolutions} />
        </p>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
