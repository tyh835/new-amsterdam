import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'rebass';
import { StyleSheetManager } from 'styled-components';

import { CakesPageTemplate } from '../../templates/cakes-page.jsx';
import theme from '../../styles/theme.js';

const CakesPagePreview = ({ entry }) => {
  const iframe = document.querySelector('.nc-previewPane-frame');
  const iframeHeadElement = iframe.contentDocument.head;

  const categoriesPre = entry.getIn(['data', 'categories']);
  const categories = categoriesPre ? categoriesPre.toJS() : [];

  return (
    <StyleSheetManager target={iframeHeadElement}>
      <Provider theme={theme}>
        <CakesPageTemplate
          title={entry.getIn(['data', 'title'])}
          jumbotron={entry.getIn(['data', 'jumbotron'])}
          categories={categories}
          isPreview={true}
        />
      </Provider>
    </StyleSheetManager>
  );
};

CakesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default CakesPagePreview;
