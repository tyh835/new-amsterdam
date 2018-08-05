import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Banner as Base,
  JumbotronWrap as BaseWrap
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

const HeroWrap = BaseWrap.extend`
  height: 25vw;
  overflow-y: hidden;
`;

const HeroImage = ({ image, isPreview, title }) => {
  return (
    <HeroWrap>
      <Image image={image} isPreview={isPreview} />
      <Banner small>{title}</Banner>
    </HeroWrap>
  );
};

HeroImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  isPreview: PropTypes.bool.isRequired
};

export default HeroImage;
