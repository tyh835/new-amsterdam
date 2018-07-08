import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'rebass';
import { StyleSheetManager } from 'styled-components';

import { PastriesPageTemplate } from '../../templates/pastries-page.jsx';
import theme from '../../styles/theme.js';

const PastriesPagePreview = ({ entry }) => {
  const iframe = document.querySelector('.nc-previewPane-frame');
  const iframeHeadElement = iframe.contentDocument.head;

  const pastriesPre = entry.getIn(['data', 'pastries']);
  const pastries = pastriesPre ? pastriesPre.toJS() : [];

  return (
    <StyleSheetManager target={iframeHeadElement}>
      <Provider theme={theme}>
        <PastriesPageTemplate
          title={entry.getIn(['data', 'title'])}
          jumbotron={entry.getIn(['data', 'jumbotron'])}
          pastries={pastries}
          isPreview={true}
        />
      </Provider>
    </StyleSheetManager>
  );
};

PastriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PastriesPagePreview;
