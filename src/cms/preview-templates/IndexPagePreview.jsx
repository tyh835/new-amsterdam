import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'rebass';
import { StyleSheetManager } from 'styled-components';

import { IndexPageTemplate } from '../../templates/index-page.jsx';
import theme from '../../styles/theme.js';

const IndexPagePreview = ({ entry }) => {
  const iframe = document.querySelector('.nc-previewPane-frame');
  const iframeHeadElement = iframe.contentDocument.head;

  const aboutPre = entry.getIn(['data', 'about']);
  const about = aboutPre ? aboutPre.toJS() : [];

  const imagesPre = entry.getIn(['data', 'images']);
  const images = imagesPre ? imagesPre.toJS() : [];

  const cardsPre = entry.getIn(['data', 'cards']);
  const cards = cardsPre ? cardsPre.toJS() : [];

  return (
    <StyleSheetManager target={iframeHeadElement}>
      <Provider theme={theme}>
        <IndexPageTemplate
          title={entry.getIn(['data', 'title'])}
          images={images}
          about={about}
          cards={cards}
          isPreview={true}
        />
      </Provider>
    </StyleSheetManager>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default IndexPagePreview;
