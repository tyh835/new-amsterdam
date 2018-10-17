import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Flex } from 'rebass';

import theme from '../styles/theme.js';
import {
  Cloud1a,
  Cloud1b,
  Cloud2,
  Cloud3,
  Cloud4,
  Cloud5
} from '../components/Clouds.jsx';

const Wrap = styled(Flex)`
  float: left;
  width: 100%;
  padding: 240px 0;
  font-family: ${theme.fonts.header};
  background-color: ${theme.color.blue};
  color: ${theme.color.white};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  z-index: 5;
`;

const Text = styled.p`
  text-align: center;
  z-index: 5;
`;

const MessagePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Wrap as="main" flexDirection="column" alignItems="center">
      <Cloud1a />
      <Cloud1b />
      <Cloud2 />
      <Cloud3 />
      <Cloud4 />
      <Cloud5 />
      <Title>{frontmatter.heading}</Title>
      <Text>{frontmatter.description}</Text>
    </Wrap>
  );
};

export default MessagePage;

export const messagePageQuery = graphql`
  query messagePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
      }
    }
  }
`;
