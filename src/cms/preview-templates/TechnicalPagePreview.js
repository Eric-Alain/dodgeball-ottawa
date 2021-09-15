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
        headingLevel: sec.headingLevel || '',
        id: sec.id || '',
        image: getAsset(sec.image) || null,
        alt: sec.alt || '',
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
