import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'rebass';
import { StyleSheetManager } from 'styled-components';

import { IndexPageTemplate } from '../../templates/index-page.jsx';
import theme from '../../layouts/theme.js';

const IndexPagePreview = ({ entry, getAsset }) => {
  const iframe = document.querySelector('.nc-previewPane-frame');
  const iframeHeadElem = iframe.contentDocument.head;

  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const jumboImages = entry.getIn(['data', 'images']);
  const images = jumboImages ? jumboImages.toJS() : [];

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Provider theme={theme}>
        <IndexPageTemplate
          images={images}
          title={entry.getIn(['data', 'title'])}
          heading={entry.getIn(['data', 'heading'])}
          description={entry.getIn(['data', 'description'])}
          intro={{ blurbs }}
          preview={true}
        />
      </Provider>
    </StyleSheetManager>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
