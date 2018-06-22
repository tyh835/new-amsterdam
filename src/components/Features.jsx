import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import Img from 'gatsby-image';
import { Flex, Box } from 'rebass';

const FeatureGrid = ({ gridItems, isPreview }) => (
  <Flex py={3} my={3}>
    {gridItems.map(item => {
      return (
        <Box key={uuid()} width={1 / 2}>
          <div>
            {isPreview ? (
              <img src={item.image} />
            ) : (
              <Img resolutions={item.image.childImageSharp.resolutions} />
            )}
          </div>
          <p>{item.text}</p>
        </Box>
      );
    })}
  </Flex>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string
    })
  ),
  isPreview: PropTypes.bool
};

export default FeatureGrid;
