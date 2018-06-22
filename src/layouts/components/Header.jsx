import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';
import Link from 'gatsby-link';
import HeadRoom from 'react-headroom';

import NavLink from '../../components/NavLink.jsx';
import {shake} from '../animations.js'
import logo from '../../img/windmill.svg';

// Styled Library Components
const HeaderWrapper = Flex.extend`
  height: ${props => props.theme.height.header}px;
  background-color: ${props => props.theme.color.header};
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Nav = Flex.extend`
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

// Styled Native DOM Elements
const Logo = styled.img`
  height: 50px;
`;

const Title = styled.span`
  font-family: ${props => props.theme.fonts.title};
  font-weight: bold;
  font-size: 2.3rem;
  margin-left: 20px;
  align-self: center;

  &:hover,
  &:focus {
    animation: ${shake} 0.5s linear 1;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 1.5rem;
  }
`;

// Main Header Component
const Header = () => {
  return (
    <HeaderWrapper
      is="header"
      width="100%"
      pr={3}
      py={3}
    >
      <NavLink exact to="/">
        <Logo src={logo} alt="New Amsterdam Bakery" />
        <Title>New Amsterdam Bakery</Title>
      </NavLink>
      <Nav
        is="nav"
        width={[0, 1 / 2, 1 / 2, 'auto']}
      >
        <NavLink exact to="/cakes" children="Our Cakes" />
        <NavLink exact to="/pastries" children="Bread and Pastries" />
        <NavLink exact to="/contact" children="Contact Us" />
      </Nav>
    </HeaderWrapper>
  );
};

export default (props) => (
  <HeadRoom downTolerance={15}>
    <Header {...props} />
  </HeadRoom>
);