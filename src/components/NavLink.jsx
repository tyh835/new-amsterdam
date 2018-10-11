import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

const Link = styled(GatsbyLink)`
  height: ${props => props.theme.height.header}px;
  display: ${props => (props.loaded ? 'flex' : 'none')};
  text-decoration: none;
  align-items: center;

  > button {
    height: 100%;
    border-radius: 0;
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.25rem;
    color: ${props => props.theme.color.black};
    text-transform: none;
    transition: ${props => props.theme.hover.transition};

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: 1.1rem;
    }
  }
  > button:hover {
    background-color: transparent;
    opacity: 0.9;
  }

  > button:hover span {
    color: ${props => props.theme.color.orange};
  }
`;

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <Link
        activeClassName="active"
        loaded={this.state.isLoaded}
        {...this.props}
      >
        <Button>{this.props.children}</Button>
      </Link>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
