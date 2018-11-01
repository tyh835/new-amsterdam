import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@rebass/grid';
import uuid from 'uuid/v4';

import Image from './Image.jsx';
import Banner from './Banner.jsx';

const JumbotronWrap = styled(Box)`
  width: 100vw;
  height: 50vw;
`;

const CarouselWrap = styled(Box)`
  width: ${props => props.totalSlides * 100}vw;
  height: 50vw;
  display: block;
  overflow: hidden;
  transition: transform 0.4s ease-out;
  transform: ${props => `translateX(-${props.currentSlide * 100}vw)`};

  > div,
  > img {
    display: inline-block;
  }
`;

export default class Carousel extends Component {
  state = {
    totalSlides: this.props.images.length,
    currentSlide: 0
  };

  changeSlide() {
    let nextSlide = this.state.currentSlide + 1;
    nextSlide = nextSlide >= this.state.totalSlides ? 0 : nextSlide;
    this.setState({ currentSlide: nextSlide });
  }

  componentDidMount() {
    this.slideInterval = setInterval(() => {
      this.changeSlide();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  render() {
    const { images } = this.props;
    return (
      <CarouselWrap
        totalSlides={this.state.totalSlides}
        currentSlide={this.state.currentSlide}
      >
        {images.map((image, i) => {
          return (
            <JumbotronWrap key={uuid()}>
              <Image image={image.path} alt={image.text} />
              <Banner as="h1" position={i} orange={i % 3 === 1} teal={i % 3 === 0}>
                {image.text}
              </Banner>
            </JumbotronWrap>
          );
        })}
      </CarouselWrap>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array
};
