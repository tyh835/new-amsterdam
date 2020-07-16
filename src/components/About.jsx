import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { Flex, Box } from '@rebass/grid';

import Image from './Image.jsx';

const AboutWrap = styled(Box)`
  min-height: 400px;
  display: grid;
  margin: 0;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  grid-template: 20% 80% / repeat(3, 1fr);
  grid-template-areas:
    'image title .'
    'image text text';

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-areas:
      'title title title'
      'text text text';
    border-radius: ${props => props.flat || '0px'};
  }
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 0px;
  }
`;

const ImageWrap = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  grid-area: image;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const TextBox = styled(Flex)`
  font-family: ${props => props.theme.fonts.serif};
  font-size: 1rem;
  width: 100%;
  line-height: 2;
  overflow-y: scroll;
  grid-area: text;
`;

const ImageCircle = styled.div`
  overflow-x: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-decoration: underline;
  text-align: center;
  grid-area: title;

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 1rem;
  }
`;

const About = ({ cake, data }) => {
  return (
    <Pulse key={data.heading} duration={cake ? 0 : 1000} bottom>
      <Fade bottom={cake} duration={1000} distance="125px">
        <AboutWrap flat={cake} width={[1, 525, 800, 800]}>
          <Title>{data.heading}</Title>
          <ImageWrap>
            <ImageCircle>
              <Image image={data.image} alt={data.alt} />
            </ImageCircle>
          </ImageWrap>
          <TextBox px={5} py={4} mb={4}>
            {data.description}
          </TextBox>
        </AboutWrap>
      </Fade>
    </Pulse>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.object,
    description: PropTypes.string,
    alt: PropTypes.string
  })
};

export default About;
