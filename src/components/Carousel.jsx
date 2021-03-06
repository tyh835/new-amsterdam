import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4'

import Image from './Image.jsx';
import CarouselBanner from './Banner.jsx';

const CarouselBlock = styled.div`
  height: 50vw;
`;

const Carousel = ({ images }) => {
  const settings = {
    autoplaySpeed: 5000,
    autoplay: true,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, i) => {
        return (
          <CarouselBlock key={uuid()}>
            <Image image={image.path} alt={image.text} />
            <CarouselBanner
              position={i + 1}
              orange={i % 3 === 1}
              teal={i % 3 === 0}
            >
              {image.text}
            </CarouselBanner>
          </CarouselBlock>
        );
      })}
    </Slider>
  );
};

Carousel.propTypes = {
  images: PropTypes.array
};

export default Carousel;
