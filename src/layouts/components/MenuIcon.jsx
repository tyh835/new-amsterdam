import React, { Component } from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

const Wrapper = styled.div`
  display: none;
  height: 100%;

  > button {
    color: ${props => props.theme.color.black};
    width: 64px;
    height: 64px;
  }

  > button:hover {
    background-color: transparent;
    opacity: 0.9;
  }

  > button:hover span {
    color: ${props => props.theme.color.orange};
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin-right: 1.5rem;
    height: ${props => props.theme.height.header}px;
    display: ${props => (props.loaded ? 'flex' : 'none')};
    align-items: center;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-right: 0.8rem;
  }
`;

const HamburgerIcon = styled(Menu)`
  color: ${props => props.theme.color.black};
  transform: scale(1.2);

  &:hover {
    color: ${props => props.theme.color.orange};
  }
`;

const CloseIcon = styled(Close)`
  color: ${props => props.theme.color.black};
  transform: scale(1.2);

  &:hover {
    color: ${props => props.theme.color.orange};
  }
`;

export default class MenuIcon extends Component {
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
      <Wrapper loaded={this.state.isLoaded}>
        <IconButton aria-label="Menu" onClick={this.props.toggleOpen}>
          {this.props.isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
      </Wrapper>
    );
  }
}
