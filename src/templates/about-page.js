import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ServicesComponent from '../components/ServicesComponent'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import AddressMap from '../components/AddressMap'
import Partners from '../components/Partner'
import Timeline from '../components/Timeline'

export const AboutPageTemplate = ({
  title,
}) => (
  <div>
    <Hero />
    <LeadText />
    <AddressMap />
    <Partners />
    <ServicesComponent />
    <Timeline />
  </div>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        { ...frontmatter }
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title  
      }
    }
  }
`
