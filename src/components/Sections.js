import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col, Card } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';

const Sections = ({ pageSections }) => {
  return (
    <>
      {pageSections.section.map((section, i) => (
        <Col xs='12' className='px-0'>
          <section key={i} className={`section-${i % 2 === 0 ? 'left' : 'right'}`}>
            <Row className='justify-content-center'>
              <Col xs='8' className='py-5 mb-5 mb-md-auto'>
                {/*For Netlify previewer*/}
                <PreviewCompatibleImage imageInfo={section} />
                {/*Actual images*/}
                <GatsbyImage image={getImage(section.image)} alt='' />
                <Card className='section-card'>
                  <Card.Body>
                    <Card.Title>{section.subheading}</Card.Title>
                    <Card.Text>{section.text}</Card.Text>
                    <Link className='btn section-btn' to={`${section.buttonLocation}`}>
                      {section.buttonText}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Col>
      ))}
    </>
  );
};

Sections.propTypes = {
  pageSections: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      subheading: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Sections;
