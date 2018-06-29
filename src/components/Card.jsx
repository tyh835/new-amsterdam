import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image.jsx';

const Wrapper = styled.div`
  width: ${props => props.dimensions.card.width || props.dimensions.card};
  height: ${props => props.dimensions.card.height || props.dimensions.card};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  grid-column: span 1

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const ImageBox = styled.div`
  width: ${props => props.dimensions.image.width || props.dimensions.image};
  height: ${props => props.dimensions.image.height || props.dimensions.image};
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1rem;
  color: ${props => props.theme.color.black};
  width: 100%;
  margin-top: 1rem;
  text-align: center;
`;

const Card = ({ data, isPreview, dimensions }) => {
  return (
    <Wrapper dimensions={dimensions}>
      {data.image ? (
        <ImageBox dimensions={dimensions}>
          <Image image={data.image} alt={data.label} isPreview={isPreview} />
        </ImageBox>
      ) : (
        ''
      )}
      {data.label ? <TextBox>{data.label}</TextBox> : ''}
    </Wrapper>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    label: PropTypes.string
  }),
  isPreview: PropTypes.bool,
  dimenstions: PropTypes.object
};

export default Card;
