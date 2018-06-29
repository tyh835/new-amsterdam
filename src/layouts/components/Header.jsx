import React from 'react';
import styled from 'styled-components';

import { Flex } from 'rebass';
import HeadRoom from 'react-headroom';

import NavLink from '../../components/NavLink.jsx';
import { shake } from '../../utils/animations.js';
import logo from '../../img/windmill.svg';

// Styled Library Components
const HeaderWrapper = Flex.extend`
  height: ${props => props.theme.height.header}px;
  background-color: ${props => props.theme.color.white};
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
const Header = () => {
  return (
    <HeaderWrapper is="header" width="100%" pr={[0, 0, 0, 3]} py={3}>
      <NavLink exact to="/">
        <Logo src={logo} alt="New Amsterdam Bakery" />
        <Title>New Amsterdam Bakery</Title>
      </NavLink>
      <Nav is="nav" width={[0, 1 / 2, 1 / 2, 'auto']}>
        <NavLink exact to="/cakes">
          Our Cakes
        </NavLink>
        <NavLink exact to="/pastries">
          Bread and Pastries
        </NavLink>
        <NavLink exact to="/404">
          Contact Us
        </NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

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
