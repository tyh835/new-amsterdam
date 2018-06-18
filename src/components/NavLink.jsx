import React from 'react';
import Link from 'gatsby-link';
import styled, {keyframes} from 'styled-components';

const buzz = keyframes`
  20% {
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    transform: translateX(-3px) rotate(-2deg);
  }
  60% {
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    transform: translateX(-2px) rotate(-1deg);
  }
  100% {
    transform: translateX(1px) rotate(0);
  }
`;

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: bold;
  color: #363636;
  text-decoration: none;
  transition: ${props => props.theme.hover.opacityTransition};

  &:hover {
    opacity: ${props => props.theme.hover.opacity};
    color: ${props => props.theme.hover.color}
  }
  
  &:hover, &:focus {
    animation: ${buzz} 0.5s linear 1;
  } 
`;

const NavLink = props => {
  return <StyledLink activeClassName="active" {...props} />;
};

export default NavLink;
