import CMS from 'netlify-cms';

import BlankPreview from './preview-templates/BlankPreview.jsx';

CMS.registerPreviewTemplate('index', BlankPreview);
CMS.registerPreviewTemplate('cakes', BlankPreview);
CMS.registerPreviewTemplate('pastries', BlankPreview);
