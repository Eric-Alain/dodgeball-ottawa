import React from 'react'
import PropTypes from 'prop-types'
//import PreviewCompatibleImage from './PreviewCompatibleImage';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Sections = ({pageSections}) => {
  return (
    <div className='page-sections'>
      {pageSections.section.map((section, i) => (
        <section key={i} className={`section-${i % 2 === 0 ? 'left' : 'right'}`}>
          <Row className='justify-content-center'>
            <Col xs='8' className='py-5'>
              <GatsbyImage image={getImage(section.image)} alt='' />
              <Card className='section-card'>
                <Card.Body>
                  <Card.Title>{section.subheading}</Card.Title>
                  <Card.Text>{section.text}</Card.Text>
                  <Button variant='danger'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      ))}
    </div>
  );
}



/*
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)*/

Sections.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      subheading: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default Sections
