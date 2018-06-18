import CMS from 'netlify-cms';

import IndexPagePreview from './preview-templates/IndexPagePreview.jsx';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('index', IndexPagePreview);
