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

export const ContactPageTemplate = ({ 
  hero,
  featureInverted,
  credits
 }) => (
  <div>
    <Hero {...hero} />
    <ContactForm />
    <Credits 
      {...credits}
    />
    <FeatureInverted 
      {...featureInverted}
    />
  </div>
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        hero={frontmatter.hero}
        featureInverted={frontmatter.featureInverted}
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
        hero {
          backgroundImage {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            alt
          }
          title
        }
        featureInverted {
          title,
          text,
          primaryButtonText,
          backgroundImage {
            image {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            alt
          }
        }        
        credits {
          title,
          creditList {
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 200, fit: CONTAIN, quality: 64) {
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
