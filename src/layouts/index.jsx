import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../styles/theme.js';
import '../styles/fonts.css';
import '../styles/global.css';

import Transition from '../components/Transition.jsx';
import Helmet from './components/Helmet.jsx';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Disclaimer from './components/Disclaimer.jsx';

const GatsbyRoot = styled.div`
  background: ${theme.color.white};
  min-height: 540px;
`;

const Layout = ({ children, location }) => {
  return (
    <>
      <Helmet />
      <Header />
      <GatsbyRoot id="gatsby-root">
        <Transition location={location}>{children}</Transition>
      </GatsbyRoot>
      <Footer />
      <Disclaimer />
    </>
  );
};

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props} />
    </ThemeProvider>
  );
};
