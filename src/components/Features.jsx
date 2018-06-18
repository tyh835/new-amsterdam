import React from 'react';
import PropTypes from 'prop-types';

const FeatureGrid = ({ gridItems }) => (
  <div>
    {gridItems.map(item => (
      <div key={item.image}>
          <p>
            <img alt="" src={item.image} />
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
