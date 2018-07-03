import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Fixed, Modal as BaseModal, Heading } from 'rebass';

import Image from './Image.jsx';

const ModalWrapper = BaseModal.extend`
  text-align: center;
  border-radius: 15px;
`;

const ModalHeading = Heading.extend`
  margin-top: 0.8rem;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.5rem;
  font-weight: 400;
`;

const Modal = ({ data, exitModal, isPreview }) => {
  return (
    <Fragment>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
        style={{ zIndex: '999' }}
        onClick={exitModal}
      />
      <ModalWrapper width={[300, 400]}>
        {data.image && <Image image={data.image} isPreview={isPreview} />}
        {data.label && <ModalHeading>{data.label}</ModalHeading>}
        {data.alt && <p>{data.alt}</p>}
      </ModalWrapper>
    </Fragment>
  );
};

Modal.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    label: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  exitModal: PropTypes.func.isRequired,
  isPreview: PropTypes.bool.isRequired
};

export default Modal;
