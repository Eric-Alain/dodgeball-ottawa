import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import MarkdownContent from '../components/MarkdownContent';
import Layout from '../components/Layout';

export const TechnicalPageTemplate = ({ title, pageSections }) => {

  return (
    <Container>
      <h1>{title}</h1>
      <Row>
        {pageSections.section.map((section, i) => (
          <Col xs='12' key={i}>
            <section>
              <h2>{section.subheading}</h2>
              <Row>
                <Col>
                  {section.image ? <PreviewCompatibleImage imageInfo={section} /> : null}                  
                  <MarkdownContent content={section.text} className='markdown-content' />
                </Col>
              </Row>
            </section>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

/*TechnicalPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};*/

const TechnicalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TechnicalPageTemplate title={frontmatter.title} pageSections={frontmatter.pageSections} />
    </Layout>
  );
};

TechnicalPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TechnicalPage;

export const technicalPageQuery = graphql`
  query TechnicalPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        pageSections {
          section {
            image {
              childImageSharp {
                gatsbyImageData(width: 800, formats: [AUTO, WEBP, AVIF], quality: 50, placeholder: BLURRED)
              }
            }
            subheading
            text
          }
        }
      }
    }
  }
`;