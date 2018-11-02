import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@rebass/grid';

import Image from './Image.jsx';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.55);
`;

const ModalWrap = styled(Box)`
  position: fixed;
  background: ${props => props.theme.color.white};
  padding: 1.2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  border-radius: 15px;
`;

const ModalHeading = styled.h2`
  margin-top: 0.8rem;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.5rem;
  font-weight: 400;
`;

const ModalDescription = styled.p`
  font-family: ${props => props.theme.fonts.sans};
`;

const Modal = ({ data, exitModal }) => {
  return (
      <ModalBackground onClick={exitModal}>
        <ModalWrap width={[300, 400]}>
          {data.image && <Image image={data.image} />}
          {data.label && <ModalHeading>{data.label}</ModalHeading>}
          {data.description && <ModalDescription>{data.description}</ModalDescription>}
        </ModalWrap>
      </ModalBackground>  
  );
};

Modal.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.PropTypes.object,
    label: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  exitModal: PropTypes.func.isRequired
};

export default Modal;