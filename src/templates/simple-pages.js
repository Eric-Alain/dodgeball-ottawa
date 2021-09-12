import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/Layout'

const SimplePagesTemplate = ({ title, content, contentComponent }) => {
  return (
    <Container>
      <Row>
        <Col>Simple pages</Col>
      </Row>
    </Container>
  )
}

SimplePagesTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const SimplePages = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SimplePagesTemplate  />
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimplePages;

export const simplePagesQuery = graphql`
  query SimplePages($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
