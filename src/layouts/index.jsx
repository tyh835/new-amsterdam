import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass';
import { injectGlobal } from 'styled-components';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import theme from './theme.js';
import './global.css';

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <Fragment>
      <Helmet
        title="New Amsterdam Bakery"
        meta={[{ property: 'og:title', content: 'New Amsterdam Bakery' }]}
        link={[{href: 'https://fonts.googleapis.com/css?family=Cabin+Sketch:400,700|Open+Sans', rel:'stylesheet'}]}
      />
      <NavBar />
      {children()}
      <Footer />
    </Fragment>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

const ThemedTemplate = props => {
  const { children } = props;
  return (
    <Provider theme={theme}>
      <TemplateWrapper children={children} />
    </Provider>
  );
};

ThemedTemplate.propTypes = {
  children: PropTypes.func
};

export default ThemedTemplate;
