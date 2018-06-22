import React from 'react';
import styled from 'styled-components';

import { Flex as Base } from 'rebass';

const Flex = styled(Base)`
  font-family: ${props => props.theme.fonts.header};
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const NotFoundPage = ({ className }) => (
  <Flex
    className={className}
    width="100%"
    py="180px"
    flexDirection="column"
    alignItems="center"
  >
    <Title>404 NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Flex>
);

export default NotFoundPage;
