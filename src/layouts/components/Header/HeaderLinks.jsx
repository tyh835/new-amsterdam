import React from 'react';
import { navigate } from '@reach/router';
import NavLink from '../../../components/NavLink.jsx';

export default () => {
  const navigateToContact = e => {
    console.log('hello');
    e.preventDefault();
    navigate('#contact');
  };

  return (
    <>
      <NavLink to="/cakes">Our Cakes</NavLink>
      <NavLink to="/pastries">Bread and Pastries</NavLink>
      <NavLink to="#contact" onClick={navigateToContact}>
        Contact Us
      </NavLink>
    </>
  );
};
