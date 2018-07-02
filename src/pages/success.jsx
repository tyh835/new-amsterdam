import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';

import theme from '../layouts/theme.js';
import { moveclouds } from '../utils/animations.js';

const Wrapper = Flex.extend`
  float: left;
  width: 100%;
  font-family: ${theme.fonts.header};
  background-color: ${theme.color.blue};
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 5;
`;

const Text = styled.p`
  z-index: 5;
`;

// Floating Clouds LOL
const Cloud = styled.div`
  width: 350px;
  height: 120px;
  background-color: #fff;
  background: linear-gradient(top, #fff 100%);
  border-radius: 100px;
  position: absolute;
  margin: 120px auto 20px;
  z-index: 3;
  transition: all 1s ease;

  &:after,
  &:before {
    content: '';
    position: absolute;
    background: #fff;
    z-index: 3;
  }

  &:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
    border-radius: 100px;
  }

  &:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
    border-radius: 200px;
  }
`;

const Cloud1a = Cloud.extend`
  top: 30px;
  left: 100px;
  transform: scale(0.3);
  opacity: 0.9;
  animation: ${moveclouds} 15s linear infinite;
`;

const Cloud1b = Cloud.extend`
  top: 0px;
  left: 250px;
  transform: scale(0.3);
  animation: ${moveclouds} 15s linear infinite;
`;

const Cloud2 = Cloud.extend`
  left: 250px;
  top: 100px;
  transform: scale(0.6);
  opacity: 0.6;
  animation: ${moveclouds} 25s linear infinite;
`;

const Cloud3 = Cloud.extend`
  left: 250px;
  bottom: -70px;
  transform: scale(0.6);
  opacity: 0.8;
  animation: ${moveclouds} 25s linear infinite;
`;

const Cloud4 = Cloud.extend`
  left: 470px;
  bottom: 50px;
  transform: scale(0.75);
  opacity: 0.75;
  animation: ${moveclouds} 18s linear infinite;
`;

const Cloud5 = Cloud.extend`
  left: 200px;
  top: 300px;
  transform: scale(0.5);
  opacity: 0.8;
  animation: ${moveclouds} 20s linear infinite;
`;

const NotFoundPage = () => (
  <Wrapper
    py="250px"
    flexDirection="column"
    alignItems="center"
  >
    <Cloud1a />
    <Cloud1b />
    <Cloud2 />
    <Cloud3 />
    <Cloud4 />
    <Cloud5 />
    <Title>Thank you for your submission!</Title>
    <Text>We will reply to your inquiry as soon as possible.</Text>
  </Wrapper>
);

export default NotFoundPage;
