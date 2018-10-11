import React from 'react';
import NavLink from '../../../components/NavLink.jsx';

export default () => {
  return (
    <>
      <NavLink to="/cakes">Our Cakes</NavLink>
      <NavLink to="/pastries">Bread and Pastries</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </>
  );
};
