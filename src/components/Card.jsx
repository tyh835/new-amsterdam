import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex } from 'rebass';
import Jumbotron from './Jumbotron.jsx';

const Wrapper = Flex.extend`
  height: 400px;
  width: 400px;
  margin: 0 2rem;
  border-radius: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    margin: 0 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    margin: 1.5rem 0;
  }

  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    border-radius: 0px;
  }
`;

const ImageBox = styled.div`
  width: 300px;
  height: 300px;
`;

const TextBox = styled.div`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.2rem;
  color: ${props => props.theme.color.black};
  width: 100%;
  margin-top: 1rem;
  text-align: center;
`;

const Card = ({image, label, isPreview}) => {
  return (
    <Wrapper>
      {image ? (<ImageBox><Jumbotron image={image} alt={label} isPreview={isPreview} /></ImageBox>): ''}
      {label ? (<TextBox>{label}</TextBox>): ''}
    </Wrapper>
  )
}

Card.propTypes = {
  image: PropTypes.object,
  label: PropTypes.string
}

export default Card;