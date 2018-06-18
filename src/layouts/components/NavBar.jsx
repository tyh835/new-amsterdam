import React from 'react';
import styled, {injectGlobal} from 'styled-components';

import * as Base from 'gatsby-link';
import { Flex } from 'rebass';

import NavLink from '../../components/NavLink.jsx';
import logo from '../../img/windmill.svg';

const Link = styled(Base.default)`
  display: flex;
  color: #363636;
  text-decoration: none;
  transition: ${props => props.theme.hover.opacityTransition};
  
  &:hover {
    opacity: ${props => props.theme.hover.opacity}
  } 
`;

const Img = styled.img`
  height: 50px;
`;

const Text = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: bold;
  font-size: 2rem;
  margin-left: 20px;
  align-self: center;

  @media (max-width: 1000px) {
    font-size: 1.7rem;
  }
`;

const NavBar = ({ className }) => (
  <Flex
    is="nav"
    justifyContent="space-between"
    alignItems="center"
    px={4}
    py={3}
  >
    <Link to="/" className={className}>
      <Img src={logo} alt="New Amsterdam Bakery" />
      <Text>New Amsterdam Bakery</Text>
    </Link>
    <Flex
      is="ul"
      justifyContent="space-around"
      alignItems="center"
      height={7}
      width={[null, 1/2, 1/2, 2/5]}
    >
      <NavLink exact to="/cakes" children="Our Cakes" />
      <NavLink exact to="/pastries" children="Bread and Pastries" />
      <NavLink exact to="/contact" children="Contact Us" />
    </Flex>
  </Flex>
);

export default NavBar;