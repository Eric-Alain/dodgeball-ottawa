import React from 'react'
import PropTypes from 'prop-types'
import { SimplePagesTemplate } from '../../templates/simple-pages'

const AboutPagePreview = ({ entry, getAsset }) => {
  <SimplePagesTemplate
    title={entry.getIn(['data', 'title'])}
  />;
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
