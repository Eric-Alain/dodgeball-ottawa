import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import Sections from '../components/Sections';
import MarkdownContent from '../components/MarkdownContent';

export const IndexPageTemplate = ({ landingBox, catchyBanner, pageSections }) => {
  
  return (
    <Container fluid>
      <Row>
        <Col
          xs='12'
          className='full-width-image'
          style={{
            backgroundImage: `url(${!!landingBox.image.childImageSharp ? landingBox.image.childImageSharp.fluid.src : landingBox.image})`
          }}
        >
          <Row className='justify-content-center'>
            <Col xs='10' className='dbo-black-75 text-center rounded py-3'>
              <h1 className='display-2 font-weight-bold'>{landingBox.title}</h1>
              <h3>{landingBox.subheading}</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='dbo-red justify-content-center catchy-banner'>
        <Col xs='10' md='8'>
          <MarkdownContent content={catchyBanner.body} className='markdown-content' />
        </Col>
      </Row>
      <Row>
        <Sections pageSections={pageSections} />
      </Row>
    </Container>
  );
};

IndexPageTemplate.propTypes = {
  landingBox: PropTypes.shape({
    image: PropTypes.object || PropTypes.string,
    title: PropTypes.string,
    subheading: PropTypes.string    
  }),
  catchyBanner: PropTypes.shape({
    body: PropTypes.string
  }),
  pageSections: PropTypes.arrayOf({
    section: PropTypes.shape({
      image: PropTypes.object || PropTypes.string,
      subheading: PropTypes.string,
      text: PropTypes.string,
      buttonText: PropTypes.string,
      buttonLocation: PropTypes.string
    })
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate landingBox={frontmatter.landingBox} catchyBanner={frontmatter.catchyBanner} pageSections={frontmatter.pageSections} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        landingBox {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subheading
        }
        catchyBanner {
          body
        }
        pageSections {
          section {
            image {
              childImageSharp {
                gatsbyImageData(width: 800, formats: [AUTO, WEBP, AVIF], quality: 50, placeholder: BLURRED)
              }
            }
            subheading
            text
            buttonText
            buttonLocation
          }
        }
      }
    }
  }
`;
