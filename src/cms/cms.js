import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import TechnicalPagePreview from './preview-templates/TechnicalPagePreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// Note about .registerPreviewTemplate('name', component)
// Make sure that the 'name' argument matches the collections 'name' field in the cms config.yml file
// Otherwise, the preview template won't register

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('technical-pages', TechnicalPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
