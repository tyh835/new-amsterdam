import React from 'react';
import NavLink from '../../../components/NavLink.jsx';

export default () => {
  return (
    <>
      <NavLink exact to="/cakes">
        Our Cakes
      </NavLink>
      <NavLink exact to="/pastries">
        Bread and Pastries
      </NavLink>
      <NavLink exact to="/contact">
        Contact Us
      </NavLink>
    </>
  );
};
