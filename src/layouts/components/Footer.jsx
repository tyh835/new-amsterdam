import React from 'react';
import PropTypes from 'prop-types';

import Disclaimer from '../Disclaimer.jsx';

const Footer = props => {
  return (
    <Disclaimer />
  );
};

Footer.propTypes = {
  data: PropTypes.string
};

export default Footer;
