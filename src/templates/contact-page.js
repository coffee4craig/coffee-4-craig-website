import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import ContactForm from '../components/ContactForm'
import Credits from '../components/Credits'
import FeatureInverted from '../components/FeatureInverted'
import Faq from '../components/Faq'

export const ContactPageTemplate = ({ title }) => (
  <div>
    <Hero title="Hero" backgroundImage={{}} />
    <LeadText text="Lead Text" />
    <ContactForm />
    <Credits title="Credits" creditList={[]} />
    <FeatureInverted title="Feature Inverted" text="" primaryButtonText="" secondaryButtonText="" backgroundImage={{}} />
    <Faq title="FAQ" list={[]} />
  </div>
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
      }
    }
  }
`