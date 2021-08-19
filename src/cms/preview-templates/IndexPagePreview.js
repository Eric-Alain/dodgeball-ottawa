import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {

  if (entry) {
    return (
      <IndexPageTemplate
        landingBox={{
          image: getAsset(entry.getIn(['data', 'landingBox', 'image'])),
          title: entry.getIn(['data', 'landingBox', 'title']),
          subheading: entry.getIn(['data', 'landingBox', 'subheading'])
        }}
        catchyBanner={{
          subheading: entry.getIn(['data', 'catchyBanner', 'subheading']),
          description: entry.getIn(['data', 'catchyBanner', 'description'])
        }}
        pageSections={{
          section: {
            image: getAsset(entry.getIn(['data', 'pageSections', 'section', 'image'])),
            subheading: entry.getIn(['data', 'pageSections', 'section', 'subheading']),
            text: entry.getIn(['data', 'pageSections', 'section', 'text'])
          }
        }}
      />
    );
  }
  else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
