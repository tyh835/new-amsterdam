import CMS from 'netlify-cms';

import NoPreview from './preview-templates/no-preview.jsx';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('index', NoPreview);
