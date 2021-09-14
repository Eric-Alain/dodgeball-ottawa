import React from 'react';
import PropTypes from 'prop-types';
import { TechnicalPageTemplate } from '../../templates/technical-page';

const TechnicalPagePreview = ({ entry, getAsset }) => {
  if (entry) {
    const data = entry.getIn(['data']) ? entry.getIn(['data']).toJS() : {};
    let section = [];

    if (data.pageSections.section !== undefined) {
      section = data.pageSections.section.map((sec) => ({
        subheading: sec.subheading || '',
        id: sec.id || '',
        alt: sec.alt || '',
        image: getAsset(sec.image),
        imageFloat: sec.imageFloat || '',
        imageWidth: sec.imageWidth || '',
        text: sec.text || '',
        extraText: sec.extraText || ''
      }));
    }

    return (
      <TechnicalPageTemplate
        title={entry.getIn(['data', 'title'])}
        pageSections={{
          section: section
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
