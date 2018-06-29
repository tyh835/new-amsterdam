import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
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
    background-color: ${props => props.theme.color.white};
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
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <Link activeClassName="active" loaded={this.state.loaded} {...this.props}>
        <Button>{this.props.children}</Button>
      </Link>
    );
  }
}

NavLink.propTypes = {
  classes: PropTypes.object,
  to: PropTypes.string.isRequired
};

export default NavLink;
