import React from 'react';
import PropTypes from 'prop-types';
import { TechnicalPageTemplate } from '../../templates/technical-page';

const TechnicalPagePreview = ({ entry, getAsset }) => {
  console.log(entry);
  if (entry) {
    return (
      <TechnicalPageTemplate
        title={entry.getIn(['data', 'title'])}
        pageSections={{
          section: entry.getIn(['data', 'pageSections', 'section']).toJS()
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
