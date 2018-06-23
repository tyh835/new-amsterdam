import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid/v4';

import Jumbotron from './Jumbotron.jsx';

const Banner = styled.p`
  font-family: ${props => props.theme.fonts.title};
  font-size: 3.5rem;
  color: #363636;
  background-color: white;
  opacity: 0.9;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 15px;
  
  position: absolute;
  width: 60vw;
  padding: 1rem;
  top: 32%;
  left: ${props => Number(props.position)*100 + 20}vw;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 2rem;
    left: ${props => Number(props.position)*100}vw;
    width: 100vw;
    border-radius: 0px;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 1.5rem;
  }
`;

const JumbotronWrapper = styled.div`
  width: 100vw;
  height: 100%;
  overflow: hidden;

  &:focus {
    outline: none !important;
  }
`;

const CarouselWrapper = styled.div`
  width: ${props => props.totalSlides * 100}vw;
  height: 50vw;
  display: flex;
  transition: transform 0.4s ease-out;
  transform: ${props => `translateX(-${props.translate * 100}vw)`};
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSlides: this.props.images.length,
      currentSlide: 0
    }
    this.changeSlide = this.changeSlide.bind(this);
  }

  changeSlide() {
    let nextSlide = this.state.currentSlide + 1;
    nextSlide = nextSlide >= this.state.totalSlides ? 0 : nextSlide;
    this.setState({currentSlide: nextSlide});
  };

  componentDidMount() {
    this.slideInterval = setInterval(() => {this.changeSlide()}, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  render() {
    const {images, isPreview} = this.props;
    return (
      <CarouselWrapper totalSlides={this.state.totalSlides} translate={this.state.currentSlide}>
      { 
        images.map((image, i) => {
          return (
            <JumbotronWrapper key={uuid()}>
              <Jumbotron image={image} isPreview={isPreview} />
              <Banner position={i}>{image.text}</Banner>
            </JumbotronWrapper>
          );
        })
      }
      </CarouselWrapper>
    )
  }
};
