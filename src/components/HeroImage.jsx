import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseBanner from './Banner.jsx';
import Image from './Image.jsx';

const Banner = styled(BaseBanner)`
  top: 15vw;
  color: ${props =>
    props.orange ? props.theme.color.orange : props.theme.color.blue};

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    top: 17vw;
  }
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const HeroWrap = styled.div`
  width: 100vw;
  height: 25vw;
  overflow-y: hidden;
`;

const HeroImage = ({ image, title, orange }) => {
  return (
    <HeroWrap>
      <Image image={image} />
      <Banner orange={orange} small>
        {title}
      </Banner>
    </HeroWrap>
  );
};

HeroImage.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  orange: PropTypes.bool
};

export default HeroImage;
