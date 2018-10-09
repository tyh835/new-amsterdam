import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  width: auto;
  min-height: 100px;
  box-sizing: content-box;
  background-color: ${props => props.theme.color.lightyellow};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    padding-bottom: 15px;
  }
`;

const Heading = styled.h2`
  padding-top: 2rem;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.color.lightyellow};
  text-align: center;
  font-family: ${props => props.theme.fonts.header};
  font-weight: 400;
  color: ${props => props.theme.color.black};
`;

const Button = styled.a`
  margin: 10px 8px;
  min-width: 120px;
  height: 50px;
  flex-shrink: 0;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2rem;
  border-radius: 7px;
  transition: ${props => props.theme.hover.transition};
  color: ${props => props.theme.color.black};
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);

  &:hover {
    color: ${props => props.theme.color.orange};
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
      <Fragment>
        <Heading>Choose a category of cakes below: </Heading>
        <Wrap>
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
        </Wrap>
      </Fragment>
    );
  }
}

Selector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  activeCategory: PropTypes.string,
  handleChange: PropTypes.func
};
