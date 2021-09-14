import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import MarkdownContent from '../components/MarkdownContent';
import Layout from '../components/Layout';

export const TechnicalPageTemplate = ({ title, pageSections }) => {
  const [pageSectionsState, setPageSectionsState] = useState(pageSections);
console.log(pageSections);
  const renderElements = (obj, image, t1, t2) => {
    
    // If user filled both body fields, but also added an image
    if (t2 && image) {
      return (
        // Concatenate the fields in a single column and insert the image
        <Col>
          {image ? <PreviewCompatibleImage imageInfo={obj} /> : null}
          <MarkdownContent content={`${t1}\n\n${t2}`} className='markdown-content' />
        </Col>
      );
    } else if (t2 && !image) {
      return (
        // Make content into a two column format without an image
        <>
          <Col xs='12' md='6'>
            <MarkdownContent content={t1} className='markdown-content' />
          </Col>
          <Col xs='12' md='6'>
            <MarkdownContent content={t2} className='markdown-content' />
          </Col>
        </>
      );
    } else {
      return (
        // Otherwise, single column with a floated image if one exists
        <Col>
          {image ? <PreviewCompatibleImage imageInfo={obj} /> : null}
          <MarkdownContent content={t1} className='markdown-content' />
        </Col>
      );
    }
  };
  
  const renderSections = useCallback(() => {
    return pageSectionsState.section.map((item, i) => {
      return (
        <Col xs='12' key={i}>
          <section>
            <h2 id={item.id}>{item.subheading}</h2>
            <Row>{renderElements(item, item.image, item.text, item.extraText)}</Row>
          </section>
        </Col>
      );
    });
  }, [pageSectionsState]);

  useEffect(() => {
    setPageSectionsState(pageSections);
    renderSections();
  }, [pageSections, renderSections]);

  return (
    <main>
      <Container>
        <h1 className='display-3 fw-bold mb-2 pb-2 border-bottom'>{title}</h1>
        <Row>{renderSections()}</Row>
      </Container>
    </main>
  );
};

TechnicalPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  pageSections: PropTypes.shape({
    section: PropTypes.arrayOf(
      PropTypes.shape({
        subheading: PropTypes.string,
        id: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.object || PropTypes.string]),
        alt: PropTypes.string,
        imageFloat: PropTypes.array,
        imageWidth: PropTypes.array,
        text: PropTypes.string,
        extraText: PropTypes.string
      })
    )
  })
};

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
  query technicalPageQuery($id: String!) {
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
            id
          }
        }
      }
    }
  }
`;
