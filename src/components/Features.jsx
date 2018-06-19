import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';

const FeatureGrid = ({ gridItems, preview }) => (
  <div>
    {gridItems.map(item => {
      console.log(item.image);
      return (
      <div key={item.image}>
        
        <p>
        {preview ? <img src={item.image.src} />: <Img resolutions={item.image.childImageSharp.resolutions} />}
        </p>
        <p>{item.text}</p>
      </div>
    )})}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
