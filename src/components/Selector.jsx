import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 0rem;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border-radius: 15px;
  overflow-x: scroll;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    width: 100%;
    border-radius: 0px;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding-bottom: 15px;
    box-shadow: none;
  }
`;

const Button = styled.a`
  width: 120px;
  height: 90%;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2rem;
  border-radius: 10px;
  transition: ${props => props.theme.hover.transition};
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    color: ${props => props.theme.color.teal};
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    background-color: ${props => props.theme.color.teal};
  }
`;

export default class Selector extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.handleChange(e.target.innerText);
  };

  render() {
    const { categories } = this.props;
    return (
      <OuterWrapper>
        <InnerWrapper>
          {categories.map(category => {
            return (
              <Button
                key={category}
                value={category}
                className={
                  category === this.props.activeCategory ? 'active-button' : ''
                }
                onClick={this.onClick}
              >
                {category}
              </Button>
            );
          })}
        </InnerWrapper>
      </OuterWrapper>
    );
  }
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
  handleChange: PropTypes.func
};
