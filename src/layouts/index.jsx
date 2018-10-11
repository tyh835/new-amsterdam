import React from 'react';

import { Provider } from 'rebass';
import theme from '../styles/theme.js';
import '../styles/fonts.css';
import '../styles/global.css';

import Helmet from './components/Helmet.jsx';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Disclaimer from './components/Disclaimer.jsx';

const Layout = ({ children }) => {
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

const ThemedLayout = props => {
  return (
    <Provider theme={theme}>
      <Layout {...props} />
    </Provider>
  );
};

export default ThemedLayout;
