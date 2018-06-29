import CMS from 'netlify-cms';

import IndexPagePreview from './preview-templates/IndexPagePreview.jsx';
import CakesPagePreview from './preview-templates/CakesPagePreview.jsx';
import PastriesPagePreview from './preview-templates/PastriesPagePreview.jsx';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('cakes', CakesPagePreview);
CMS.registerPreviewTemplate('pastries', PastriesPagePreview);
