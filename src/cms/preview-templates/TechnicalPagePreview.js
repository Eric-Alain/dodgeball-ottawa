import React from 'react';
import PropTypes from 'prop-types';
import { TechnicalPageTemplate } from '../../templates/technical-page';

const TechnicalPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    const data = entry.getIn(['data']) ? entry.getIn(['data']).toJS() : {};
    let technicalSection = [];

    if (data.hasOwnProperty('technicalPageSections')) {
      technicalSection = data.technicalPageSections.technicalSection.map((sec) => ({
        subheading: sec.subheading || '',
        id: sec.id || '',
        alt: sec.alt || '',
        image: getAsset(sec.image) || null,
        imageFloat: sec.imageFloat || '',
        imageWidth: sec.imageWidth || '',
        text: sec.text || '',
        extraText: sec.extraText || ''
      }));
    }

    return (
      <TechnicalPageTemplate
        title={entry.getIn(['data', 'title'])}
        technicalPageSections={{
          technicalSection: technicalSection
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

TechnicalPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TechnicalPagePreview;
