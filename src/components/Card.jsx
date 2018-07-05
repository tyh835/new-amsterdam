import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Image from './Image.jsx';

const Wrapper = styled.div`
  width: ${props => props.dimensions.card.width || props.dimensions.card};
  height: ${props => props.dimensions.card.height || props.dimensions.card};
  background-color: ${props => props.theme.color.white};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  grid-column: span 1;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  width: ${props => props.dimensions.card.image};
  height: ${props => props.dimensions.card.image};
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1rem;
  color: ${props => props.theme.color.black};
  width: 100%;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 1rem;
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  onClick = () => {
    if (this.props.handleClick) {
      this.props.handleClick(this.props.data);
    }
  };

  render() {
    const { data, isPreview, dimensions, link } = this.props;
    return (
      <Fade bottom duration={1000} distance="120px">
        <Wrapper dimensions={dimensions} onClick={this.onClick}>
          {data.image && (
            <ImageBox dimensions={dimensions}>
              <Image image={data.image} alt={data.alt} isPreview={isPreview} />
            </ImageBox>
          )}
          {data.label && <TextBox>{data.label}</TextBox>}
        </Wrapper>
      </Fade>
    );
  }
}

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    label: PropTypes.string
  }),
  isPreview: PropTypes.bool,
  dimenstions: PropTypes.object,
  link: PropTypes.bool
};

export default Card;
