import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  overflow-y: visible;

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    margin-top: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 0rem;
    padding-bottom: 15px;
  }
`;

const Button = styled.a`
  margin: 0 8px;
  min-width: 120px;
  max-width: 180px;
  height: 50%;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2rem;
  border-radius: 7px;
  transition: ${props => props.theme.hover.transition};
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: ${props => props.theme.color.darkorange};
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
      <Wrapper>
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
      </Wrapper>
    );
  }
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
  handleChange: PropTypes.func
};
