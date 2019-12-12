import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import RichText from '../components/RichText'
import Cta from '../components/Cta'

export const FundraisingPageTemplate = ({ title }) => (
  <div className="fundraising">
    <Hero title="Hero" backgroundImage={{}} />
    <LeadText text="Lead Text" />
    <RichText text="Rich Text" />
  </div>
)

const FundraisingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <FundraisingPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

FundraisingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FundraisingPage

export const pageQuery = graphql`
  query FundraisingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "fundraising-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
