import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'rebass';

import { IndexPageTemplate } from '../../templates/index-page';
import theme from '../../layouts/theme.js';

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <Provider theme={theme}>
      <IndexPageTemplate
        image={entry.getIn(['data', 'image'])}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        intro={{ blurbs }}
      />
    </Provider>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
