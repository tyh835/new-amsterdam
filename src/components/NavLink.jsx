import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
  height: ${props => props.theme.height.header}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.black};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.25rem;

  &:hover {
    color: ${props => props.theme.color.orange};
    opacity: 0.9;
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 1.1rem;
  }
`;

class NavLink extends Component {
  render() {
    return (
      <Link activeClassName="active" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
