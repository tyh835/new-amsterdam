import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Banner as Base,
  JumbotronWrapper as BaseWrapper
} from './Carousel.jsx';
import Image from './Image.jsx';

const Banner = Base.extend`
  top: 15vw;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    top: 17vw;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const JumbotronWrapper = BaseWrapper.extend`
  height: 25vw;
  overflow-y: hidden;
`;

const HeroImage = ({ image, isPreview, title }) => {
  return (
    <Fragment>
      <JumbotronWrapper>
        <Image image={image} isPreview={isPreview} />
        <Banner small>{title}</Banner>
      </JumbotronWrapper>
    </Fragment>
  );
};

HeroImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  isPreview: PropTypes.bool.isRequired
};

export default HeroImage;
