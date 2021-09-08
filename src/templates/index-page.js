import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/Layout';
import Sections from '../components/Sections';
import MarkdownContent from '../components/MarkdownContent';
//import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({ landingBox, catchyBanner, pageSections }) => {
  
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs='12' className='px-0'>
            <div
              className='full-width-image mt-0'
              style={{
                backgroundImage: `url(${!!landingBox.image.childImageSharp ? landingBox.image.childImageSharp.fluid.src : landingBox.image})`,
                //Don't remove, this achieves parallax effect
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`
              }}
            >
              <Row>
                <Col className='dbo-red-half text-center rounded p-5'>
                  <h1 className='display-2 font-weight-bold'>{landingBox.title}</h1>
                  <h3>{landingBox.subheading}</h3>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className='dbo-red justify-content-center'>
          <Col xs='8' className='py-5'>
            <MarkdownContent content={catchyBanner.body} />
          </Col>
        </Row>
        <Row>
          <Sections pageSections={pageSections} />

          {/*
            <Features gridItems={intro.blurbs} />
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/products">
                  See all products
                </Link>
              </div>
            </div>
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                Latest stories
              </h3>
              <BlogRoll />
              <div className="column is-12 has-text-centered">
                <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div>
            </div>
          */}
        </Row>
      </Container>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  landingBox: PropTypes.object
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
                gatsbyImageData(formats: [AUTO, WEBP, AVIF], quality: 50, placeholder: BLURRED)
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
