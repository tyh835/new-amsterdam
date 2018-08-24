import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';
import HeadRoom from 'react-headroom';
import Collapse from '@material-ui/core/Collapse';

import MenuIcon from './MenuIcon.jsx';
import NavLink from '../../components/NavLink.jsx';
import { shake } from '../../utils/animations.js';
import logo from '../../img/windmill.svg';

// Styled Library Components
const HeaderWrap = Flex.extend`
  height: ${props => props.theme.height.header}px;
  background-color: ${props => props.theme.color.white};
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const DesktopNav = Flex.extend`
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const MobileNav = styled(Collapse)`
  display: none;
  background-color: ${props => props.theme.color.white};
  position: absolute;
  top: ${props => props.theme.height.header}px;
  right: 0;
  width: 300px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16), 0 4px 4px rgba(0, 0, 0, 0.23);

  * {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: block;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    width: 100%;
  }
`;

// Styled Native DOM Elements
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
    font-size: 1.5rem;
    margin-left: 0px;
  }
`;

// Main Header Component
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  };

  toggleOpen = () => {
    this.setState(state => ({isOpen: !state.isOpen}));
  }

  render() {
    return (
      <HeaderWrap is="header" width="100%" pr={[0, 0, 0, 3]} py={3}>
        <NavLink exact to="/">
          <Logo src={logo} alt="New Amsterdam Bakery" />
          <Title>New Amsterdam Bakery</Title>
        </NavLink>
        <MenuIcon isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
        <DesktopNav is="nav" isOpen={this.state.isOpen}>
          <NavLink exact to="/cakes">
            Our Cakes
          </NavLink>
          <NavLink exact to="/pastries">
            Bread and Pastries
          </NavLink>
          <NavLink exact to="/contact">
            Contact Us
          </NavLink>
        </DesktopNav>
        <MobileNav in={this.state.isOpen} timeout={350}>
          <NavLink exact to="/cakes">
            Our Cakes
          </NavLink>
          <NavLink exact to="/pastries">
            Bread and Pastries
          </NavLink>
          <NavLink exact to="/contact">
            Contact Us
          </NavLink>
        </MobileNav>
      </HeaderWrap>
    );
  }
}

export default class ReactiveHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: false
    };
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop < 50 && !this.state.disable) {
      this.setState({ disable: true });
    } else if (this.state.disable) {
      this.setState({ disable: false });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <HeadRoom downTolerance={15} disable={this.state.disable}>
        <Header {...this.props} />
      </HeadRoom>
    );
  }
}
