import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image.jsx';

const Wrapper = styled.div`
  width: ${props => props.dimensions.card.width || props.dimensions.card}px;
  height: ${props => props.dimensions.card.height || props.dimensions.card}px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    border-radius: 0px;
  }
`;

const ImageBox = styled.div`
  width: ${props => props.dimensions.image.width || props.dimensions.image}px;
  height: ${props => props.dimensions.image.height || props.dimensions.image}px;
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.1rem;
  color: ${props => props.theme.color.black};
  width: 100%;
  margin-top: 1rem;
  text-align: center;
`;

const Card = ({ image, label, isPreview, dimensions }) => {
  return (
    <Wrapper dimensions={dimensions}>
      {image ? (
        <ImageBox dimensions={dimensions}>
          <Image image={image} alt={label} isPreview={isPreview} />
        </ImageBox>
      ) : (
        ''
      )}
      {label ? <TextBox>{label}</TextBox> : ''}
    </Wrapper>
  );
};

Card.propTypes = {
  image: PropTypes.object,
  label: PropTypes.string,
  isPreview: PropTypes.bool,
  dimenstions: PropTypes.object
};

export default Card;
