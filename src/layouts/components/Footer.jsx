import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <div style={{fontSize: "0.4rem"}}>Windmill Icon made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
  );
};

Footer.propTypes = {
  data: PropTypes.string
}

export default Footer;