import React from 'react';
import styled from 'styled-components';

import NavLink from '../../../components/NavLink.jsx';
import logo from '../../../img/windmill.svg';
import { shake } from '../../../utils/animations.js';

const Logo = styled.img`
  height: 55px;

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`;

const Title = styled.span`
  font-family: ${props => props.theme.fonts.title};
  font-weight: bold;
  font-size: 2.3rem;
  margin-left: 20px;
  color: #363636;

  &:hover,
  &:focus {
    animation: ${shake} 0.5s linear 1;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 1.4rem;
    margin-left: 0px;
  }
`;


const HeaderTitle = () => {
  return (
    <NavLink to="/">
      <Logo src={logo} alt="New Amsterdam Bakery" />
      <Title>New Amsterdam Bakery</Title>
    </NavLink>
  )
}

export default HeaderTitle