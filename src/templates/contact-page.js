import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import LeadText from '../components/LeadText'
import ContactForm from '../components/ContactForm'
import Credits from '../components/Credits'
import Emergency from '../components/Emergency'
import FeatureInverted from '../components/FeatureInverted'
import Faq from '../components/Faq'

export const ContactPageTemplate = ({ 
  credits
 }) => (
  <div>
    <Hero title="Hero" backgroundImage={{}} />
    <LeadText text="Lead Text" />
    <ContactForm />
    <Credits 
      {...credits}
    />  
    <FeatureInverted title="Feature Inverted" text="" primaryButtonText="" secondaryButtonText="" backgroundImage={{}} />
    <Faq title="FAQ" list={[]} />
  </div>
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        credits={frontmatter.credits}
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
        credits {
          title,
          creditList {
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              },
              alt
            }
            link {
              url,
              target
            }
            description
          }
        }
      }
    }
  }
`
