import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Banner as Base,
  JumbotronWrap as BaseWrap
} from './Carousel.jsx';
import Image from './Image.jsx';

const Banner = Base.extend`
  top: 15vw;
  color: ${props => props.orange ? props.theme.color.orange : props.theme.color.blue};

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

const HeroImage = ({ image, isPreview, title, orange }) => {
  return (
    <HeroWrap>
      <Image image={image} isPreview={isPreview} />
      <Banner orange={orange} small>{title}</Banner>
    </HeroWrap>
  );
};

HeroImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  isPreview: PropTypes.bool.isRequired,
  orange: PropTypes.bool
};

export default HeroImage;
