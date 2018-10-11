import React from 'react';

import { Provider } from 'rebass';
import theme from '../styles/theme.js';
import '../styles/fonts.css';
import '../styles/global.css';

import Helmet from './components/Helmet.jsx';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Disclaimer from './components/Disclaimer.jsx';

const LayoutTemplate = ({ children }) => {
  return (
    <>
      <Helmet />
      <Header />
      {children}
      <Footer />
      <Disclaimer />
    </>
  );
};

const ThemedLayoutTemplate = props => {
  return (
    <Provider theme={theme}>
      <LayoutTemplate {...props} />
    </Provider>
  );
};

export default ThemedLayoutTemplate;
