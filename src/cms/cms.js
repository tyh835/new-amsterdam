import CMS from 'netlify-cms';

import BlankPreview from './preview-templates/BlankPreview.jsx';

CMS.registerPreviewStyle(
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
);
CMS.registerPreviewTemplate('index', BlankPreview);
CMS.registerPreviewTemplate('cakes', BlankPreview);
CMS.registerPreviewTemplate('pastries', BlankPreview);
