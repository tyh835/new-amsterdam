import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('index', IndexPagePreview)

