import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';

import theme from '../layouts/theme.js';

const Wrapper = Flex.extend`
  font-family: ${theme.fonts.header};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const NotFoundPage = ({ className }) => (
  <Wrapper
    className={className}
    width="100%"
    py="120px"
    flexDirection="column"
    alignItems="center"
  >
    <Title>404 NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Wrapper>
);

export default NotFoundPage;
