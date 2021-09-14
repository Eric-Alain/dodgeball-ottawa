import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  
  const getFloatClass = (float) => {
    switch (float) {
      case 'Left':
        return 'float-start me-3 mb-3';
      case 'Right':
        return 'float-end ms-3 mb-3';
      default:
        return '';
    }
  };

  const getWidthClass = (width) => {
    switch (width) {
      case '25%':
        return 'w-25';
      case '50%':
        return 'w-50';
      case '75%':
        return 'w-75';
      default:
        return '';
    }
  };

  /*Destructed object  variable assignment*/
  const { alt = '', image, imageFloat, imageWidth } = imageInfo;

  const [float, setFloat] = useState(getFloatClass(imageFloat));
  const [width, setWidth] = useState(getWidthClass(imageWidth));

  useEffect(() => {
    setFloat(getFloatClass(imageFloat));
    setWidth(getWidthClass(imageWidth));
  }, [imageInfo, imageFloat, imageWidth]);

  if (!!image && !!image.childImageSharp) {
    
    return <GatsbyImage image={getImage(image)} className={`${float} ${width}`} alt={alt} />;
  }
  //For technical preview
  else if (image.path !== 'empty.svg' && typeof image.url === 'string') {
    return <img src={image.url} alt={alt} className={`${float} ${width} gatsby-image-wrapper`} />;
  }
  //For landing preview 
  else if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} className={`${float} ${width} gatsby-image-wrapper`} />;
  }

  return null;
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage
