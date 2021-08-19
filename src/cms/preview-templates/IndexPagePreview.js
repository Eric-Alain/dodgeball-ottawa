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
